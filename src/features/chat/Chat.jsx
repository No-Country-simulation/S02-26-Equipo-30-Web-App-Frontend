import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Chat.css';
import { Search, Send } from '@shared/branding/icons';
import { chatService } from './chatService';

const Chat = () => {
    const [searchParams] = useSearchParams();
    const listingIdFromUrl = searchParams.get('listingId');

    const [conversations, setConversations] = useState([]);
    const [activeConversationId, setActiveConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch conversations on mount
    useEffect(() => {
        const fetchConversations = async () => {
            try {
                setLoading(true);
                const data = await chatService.getUserConversations();
                setConversations(data);

                // Logic to select or create conversation based on listingIdFromUrl
                if (listingIdFromUrl) {
                    const existing = data.find(c => c.listingId === listingIdFromUrl);
                    if (existing) {
                        setActiveConversationId(existing.conversationId);
                    } else {
                        // Create new conversation
                        try {
                            const newConv = await chatService.createConversation(listingIdFromUrl);
                            setConversations(prev => [newConv, ...prev]);
                            setActiveConversationId(newConv.conversationId);
                        } catch (e) {
                            console.error("Error creating conversation:", e);
                        }
                    }
                } else if (data.length > 0 && !activeConversationId) {
                    setActiveConversationId(data[0].conversationId);
                }
            } catch (err) {
                console.error("Error fetching conversations:", err);
                setError("No se pudieron cargar las conversaciones.");
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, [listingIdFromUrl]);

    // Fetch messages when active conversation changes
    useEffect(() => {
        let interval;
        if (activeConversationId) {
            const fetchMessages = async () => {
                try {
                    const data = await chatService.getMessages(activeConversationId);
                    setMessages(data);

                    // Mark last message as read if it's from the other user
                    const lastMsg = data[data.length - 1];
                    if (lastMsg && lastMsg.senderId === activeConversation.otherUserId && !lastMsg.isRead) {
                        try {
                            await chatService.markAsRead(lastMsg.messageId);
                        } catch (e) {
                            console.error("Error marking as read:", e);
                        }
                    }
                } catch (err) {
                    console.error("Error fetching messages:", err);
                }
            };

            fetchMessages();
            // Poll for new messages every 5 seconds
            interval = setInterval(fetchMessages, 5000);
        }
        return () => clearInterval(interval);
    }, [activeConversationId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageInput.trim() || !activeConversationId) return;

        const text = messageInput;
        setMessageInput(""); // Optimistic clear

        try {
            const response = await chatService.sendMessage(activeConversationId, text);
            // Re-fetch messages or append if response includes the new message
            setMessages(prev => [...prev, response]);
        } catch (err) {
            console.error("Error sending message:", err);
            setMessageInput(text);
            alert("No se pudo enviar el mensaje.");
        }
    };

    const activeConversation = conversations.find(c => c.conversationId === activeConversationId);

    if (loading && conversations.length === 0) {
        return <div className="chat-loading">Cargando chats...</div>;
    }

    return (
        <main className="chat-page-container">
            <div className="chat-layout">
                {/* Sidebar */}
                <aside className="chat-sidebar">
                    <div className="sidebar-header">
                        <h2>Mensajes</h2>
                        <div className="search-box">
                            <Search size={18} />
                            <input type="text" placeholder="Buscar conversaciones..." />
                        </div>
                    </div>

                    <div className="conversations-list">
                        {conversations.length === 0 ? (
                            <p className="no-convs">No tienes conversaciones activas.</p>
                        ) : (
                            conversations.map((conv) => (
                                <div
                                    key={conv.conversationId}
                                    className={`conversation-item ${activeConversationId === conv.conversationId ? 'active' : ''}`}
                                    onClick={() => setActiveConversationId(conv.conversationId)}
                                >
                                    <div className="conv-avatar-placeholder">
                                        {/* Placeholder logic if participantAvatar not in schema */}
                                        {conv.otherUserName?.charAt(0).toUpperCase() || "?"}
                                    </div>
                                    <div className="conv-info">
                                        <div className="conv-header">
                                            <h4>{conv.otherUserName}</h4>
                                            {/* Logic for unread badges could be added if provided in schema */}
                                        </div>
                                        <p className="conv-subject">{conv.listingTitle}</p>
                                        <p className="conv-last-msg">{conv.lastMessage || "Inicia la conversación"}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </aside>

                {/* Main Chat Area */}
                <section className="chat-main">
                    {activeConversation ? (
                        <>
                            <header className="active-chat-header">
                                <div className="active-avatar-placeholder">
                                    {activeConversation.otherUserName?.charAt(0).toUpperCase()}
                                </div>
                                <div className="active-info">
                                    <h3>{activeConversation.otherUserName}</h3>
                                    <p>Conversación sobre: {activeConversation.listingTitle}</p>
                                </div>
                            </header>

                            <div className="chat-messages-area">
                                {messages.map((msg) => (
                                    <div key={msg.messageId} className={`message-bubble ${msg.senderId !== activeConversation.otherUserId ? 'sent' : 'received'}`}>
                                        <div className="message-content">
                                            <p>{msg.text}</p>
                                            <span className="message-time">
                                                {new Date(msg.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <footer className="chat-input-area">
                                <form className="input-wrapper" onSubmit={handleSendMessage}>
                                    <input
                                        type="text"
                                        placeholder="Escribe tu mensaje..."
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                    />
                                    <button type="submit" className="send-btn" disabled={!messageInput.trim()}>
                                        <Send size={20} />
                                    </button>
                                </form>
                                <p className="input-disclaimer">
                                    Recuerda: Nunca compartas información financiera sensible por este medio.
                                </p>
                            </footer>
                        </>
                    ) : (
                        <div className="no-chat-selected">
                            <div className="no-chat-content">
                                <h3>Selecciona una conversación</h3>
                                <p>Elige un chat de la lista para empezar a mensajear.</p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Chat;
