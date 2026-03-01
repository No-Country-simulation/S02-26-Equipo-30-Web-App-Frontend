/* Chat.jsx */
import React, { useState } from 'react';
import './Chat.css';
import { Search, Send, Message } from '@shared/branding/icons';

const Chat = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [message, setMessage] = useState("");

    const conversations = [
        {
            id: 0,
            name: "Carlos Rodríguez",
            subject: "Thunder Spirit",
            lastMessage: "Buenas! ¿Te viene bien el lunes a primera hor...",
            unread: 1,
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 1,
            name: "Carlos Rodríguez",
            subject: "Thunder Spirit",
            lastMessage: "Buenas! ¿Te viene bien el lunes a primera...",
            unread: 0,
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
        }
    ];

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
                        {conversations.map((conv) => (
                            <div
                                key={conv.id}
                                className={`conversation-item ${activeTab === conv.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(conv.id)}
                            >
                                <img src={conv.avatar} alt={conv.name} className="conv-avatar" />
                                <div className="conv-info">
                                    <div className="conv-header">
                                        <h4>{conv.name}</h4>
                                        {conv.unread > 0 && <span className="unread-badge">{conv.unread}</span>}
                                    </div>
                                    <p className="conv-subject">{conv.subject}</p>
                                    <p className="conv-last-msg">{conv.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Chat Area */}
                <section className="chat-main">
                    <header className="active-chat-header">
                        <img src={conversations[activeTab].avatar} alt="" className="active-avatar" />
                        <div className="active-info">
                            <h3>{conversations[activeTab].name}</h3>
                            <p>Conversación sobre: {conversations[activeTab].subject}</p>
                        </div>
                    </header>

                    <div className="chat-messages-area">
                        {/* Empty for now to match screenshot */}
                    </div>

                    <footer className="chat-input-area">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Escribe tu mensaje..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button className="send-btn">
                                <Send size={20} />
                            </button>
                        </div>
                        <p className="input-disclaimer">
                            Recuerda: Nunca compartas información financiera sensible por este medio.
                        </p>
                    </footer>
                </section>
            </div>
        </main>
    );
};

export default Chat;
