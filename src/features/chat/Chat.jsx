/* Chat.jsx */
import React, { useState, useEffect, useCallback } from 'react';
import './Chat.css';
import { Search, Send } from '@shared/branding/icons';
import { chatService } from './chatService';

const Chat = () => {
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
                // Automatically select first conversation if any
                if (data.length > 0 && !activeConversationId) {
                    setActiveConversationId(data[0].id);
                }
            } catch (err) {
                console.error("Error fetching conversations:", err);
                setError("No se pudieron cargar las conversaciones.");
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, [activeConversationId]);

    // Fetch messages when active conversation changes
    useEffect(() => {
        let interval;
        if (activeConversationId) {
            const fetchMessages = async () => {
                try {
                    const data = await chatService.getMessages(activeConversationId);
                    setMessages(data);
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
            const newMessage = await chatService.sendMessage(activeConversationId, text);
            setMessages(prev => [...prev, newMessage]);
        } catch (err) {
            console.error("Error sending message:", err);
            // Revert message input on error (optional but helpful)
            setMessageInput(text);
            alert("No se pudo enviar el mensaje.");
        }
    };

    const activeConversation = conversations.find(c => c.id === activeConversationId);

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
                                    key={conv.id}
                                    className={`conversation-item ${activeConversationId === conv.id ? 'active' : ''}`}
                                    onClick={() => setActiveConversationId(conv.id)}
                                >
                                    <img
                                        src={conv.participantAvatar || "https://ui-avatars.com/api/?name=" + conv.participantName}
                                        alt={conv.participantName}
                                        className="conv-avatar"
                                    />
                                    <div className="conv-info">
                                        <div className="conv-header">
                                            <h4>{conv.participantName}</h4>
                                            {conv.unreadCount > 0 && <span className="unread-badge">{conv.unreadCount}</span>}
                                        </div>
                                        <p className="conv-subject">{conv.listingTitle}</p>
                                        <p className="conv-last-msg">{conv.lastMessage?.text || "Inicia la conversación"}</p>
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
                                <img
                                    src={activeConversation.participantAvatar || "https://ui-avatars.com/api/?name=" + activeConversation.participantName}
                                    alt=""
                                    className="active-avatar"
                                />
                                <div className="active-info">
                                    <h3>{activeConversation.participantName}</h3>
                                    <p>Conversación sobre: {activeConversation.listingTitle}</p>
                                </div>
                            </header>

                            <div className="chat-messages-area">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`message-bubble ${msg.isFromMe ? 'sent' : 'received'}`}>
                                        <div className="message-content">
                                            <p>{msg.text}</p>
                                            <span className="message-time">
                                                {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
