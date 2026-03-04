/* Chat.jsx */
import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Search, Send } from "@shared/branding/icons";
import { chatService } from "./chatService";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock conversation for testing UI
useEffect(() => {
    const mockConversation = {
        id: "test-1",
        participantName: "Carlos Rodríguez",
        participantAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        listingTitle: "Thunder Spirit",
        unreadCount: 1,
        lastMessage: { text: "Buenas! ¿Te viene bien el lunes a primera hora?" }
    };

    const mockMessages = [
        {
            id: 1,
            text: "Hola! Estoy interesado en Thunder Spirit.",
            createdAt: new Date(),
            isFromMe: false
        },
        {
            id: 2,
            text: "Perfecto, sigue disponible.",
            createdAt: new Date(),
            isFromMe: true
        },
        {
            id: 3,
            text: "Buenas! ¿Te viene bien el lunes a primera hora?",
            createdAt: new Date(),
            isFromMe: false
        }
    ];

    setConversations([mockConversation]);
    setActiveConversationId("test-1");
    setMessages(mockMessages);
    setLoading(false);

}, []);

  // Fetch conversations on mount
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        const data = await chatService.getUserConversations();
        setConversations(data);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      interval = setInterval(fetchMessages, 5000);
    }
    return () => clearInterval(interval);
  }, [activeConversationId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeConversationId) return;

    const text = messageInput;
    setMessageInput("");

    try {
      const newMessage = await chatService.sendMessage(activeConversationId, text);
      setMessages((prev) => [...prev, newMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessageInput(text);
      alert("No se pudo enviar el mensaje.");
    }
  };

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  if (loading && conversations.length === 0) {
    return <div className="chat-loading">Cargando chats...</div>;
  }

  return (
    <main className="chat-page">
      <div className="chat-shell">
        <div className="chat-layout">
          {/* Sidebar */}
          <aside className="chat-sidebar">
            <div className="chat-sidebar__header">
              <h2 className="chat-sidebar__title">Mensajes</h2>

              <div className="chat-search">
                <span className="chat-search__icon">
                  <Search size={18} />
                </span>
                <input className="chat-search__input" type="text" placeholder="Buscar conversaciones..." />
              </div>
            </div>

            <div className="chat-convList">
              {error && <div className="chat-error">{error}</div>}

              {conversations.length === 0 ? (
                <p className="chat-empty">No tienes conversaciones activas.</p>
              ) : (
                conversations.map((conv) => (
                  <button
                    type="button"
                    key={conv.id}
                    className={`chat-convItem ${activeConversationId === conv.id ? "is-active" : ""}`}
                    onClick={() => setActiveConversationId(conv.id)}
                  >
                    <img
                      src={
                        conv.participantAvatar ||
                        "https://ui-avatars.com/api/?name=" + encodeURIComponent(conv.participantName || "Usuario")
                      }
                      alt={conv.participantName}
                      className="chat-convItem__avatar"
                    />

                    <div className="chat-convItem__info">
                      <div className="chat-convItem__top">
                        <h4 className="chat-convItem__name">{conv.participantName}</h4>
                        {conv.unreadCount > 0 && <span className="chat-unread">{conv.unreadCount}</span>}
                      </div>

                      <p className="chat-convItem__subject">{conv.listingTitle}</p>
                      <p className="chat-convItem__last">{conv.lastMessage?.text || "Inicia la conversación"}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </aside>

          {/* Main Chat Area */}
          <section className="chat-main">
            {activeConversation ? (
              <>
            <header className="chat-activeHeader">
            <div className="chat-activeHeader__left">
                <img
                src={
                    activeConversation.participantAvatar ||
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(activeConversation.participantName || "Usuario")
                }
                alt={activeConversation.participantName}
                className="chat-activeHeader__avatar"
                />

                <div className="chat-activeHeader__text">
                <h3 className="chat-activeHeader__name">{activeConversation.participantName}</h3>

                <p className="chat-activeHeader__meta">
                    Conversación sobre: <span>{activeConversation.listingTitle}</span>
                </p>
                </div>
            </div>

            <button
                type="button"
                className="chat-deleteBtn"
                onClick={() => {
                // Demo local (solo UI)
                setConversations((prev) => prev.filter((c) => c.id !== activeConversationId));
                setMessages([]);
                setActiveConversationId(null);
                }}
            >
                Borrar chat
            </button>
            </header>

                <div className="chat-messages">
                  {messages.length === 0 ? (
                    <div className="chat-messages__empty">
                      <p>No hay mensajes todavía. Escribe el primero 🙂</p>
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`chat-bubble ${msg.isFromMe ? "chat-bubble--sent" : "chat-bubble--received"}`}
                      >
                        <div className="chat-bubble__inner">
                          <p className="chat-bubble__text">{msg.text}</p>
                          <span className="chat-bubble__time">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <footer className="chat-compose">
                  <form className="chat-compose__row" onSubmit={handleSendMessage}>
                    <input
                      className="chat-compose__input"
                      type="text"
                      placeholder="Escribe tu mensaje..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />

                    <button type="submit" className="chat-compose__send" disabled={!messageInput.trim()}>
                      <Send size={18} />
                    </button>
                  </form>

                  <p className="chat-compose__hint">
                    Recuerda: Nunca compartas información financiera sensible por este medio.
                  </p>
                </footer>
              </>
            ) : (
              <div className="chat-noActive">
                <div className="chat-noActive__box">
                  <h3>Selecciona una conversación</h3>
                  <p>Elige un chat de la lista para empezar a mensajear.</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Chat;