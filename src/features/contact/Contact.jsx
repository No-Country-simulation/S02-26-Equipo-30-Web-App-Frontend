/* Contact.jsx */
import React from 'react';
import './Contact.css';
import {
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    User,
    Info
} from '@shared/branding/icons';
import { useNavigate } from 'react-router-dom';

// Manual SVG for Send/PaperPlane to match screenshot
const SendIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío de formulario aquí
        alert('Mensaje enviado correctamente');
    };

    return (
        <main className="contact">
            {/* HERO SECTION */}
            <section className="contact-hero">
                <div className="contact-container">
                    <div className="contact-hero__inner">
                        <span className="contact-hero__badge">Estamos Aquí para Ayudarte</span>
                        <h1 className="contact-hero__title">Contáctanos</h1>
                        <p className="contact-hero__subtitle">
                            Nuestro equipo de expertos está disponible 24/7 para resolver cualquier duda
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="contact-container">
                <div className="contact-grid">
                    {/* LEFT COLUMN */}
                    <aside className="contact-info-stack">
                        <div className="contact-card">
                            <h2 className="contact-card__title">Información de Contacto</h2>
                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-item__content">
                                    <h3 className="contact-item__label">Teléfono</h3>
                                    <p className="contact-item__value">+34 900 123 456</p>
                                    <p className="contact-item__sub">Lun - Dom: 24/7</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon email">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-item__content">
                                    <h3 className="contact-item__label">Email</h3>
                                    <p className="contact-item__value">soporte@horsetrust.com</p>
                                    <p className="contact-item__sub">Respuesta en 15 min</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon chat">
                                    <span style={{ fontSize: '18px' }}>💬</span>
                                </div>
                                <div className="contact-item__content">
                                    <h3 className="contact-item__label">Chat en Vivo</h3>
                                    <p className="contact-item__value">Disponible 24/7</p>
                                    <button className="contact-btn-link">Iniciar Chat</button>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item__icon office">
                                    <MapPin size={20} />
                                </div>
                                <div className="contact-item__content">
                                    <h3 className="contact-item__label">Oficinas</h3>
                                    <p className="contact-item__value">Calle Ecuestre 123</p>
                                    <p className="contact-item__sub">28001 Madrid, España</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card hours-card">
                            <h2 className="contact-card__title hours-card__title">
                                <span style={{ opacity: 0.8 }}>🕒</span> Horario de Atención
                            </h2>
                            <div className="hours-list">
                                <div className="hours-row">
                                    <span className="hours-row__label">Soporte Telefónico:</span>
                                    <span className="hours-row__value">24/7</span>
                                </div>
                                <div className="hours-row">
                                    <span className="hours-row__label">Chat en Vivo:</span>
                                    <span className="hours-row__value">24/7</span>
                                </div>
                                <div className="hours-row">
                                    <span className="hours-row__label">Email:</span>
                                    <span className="hours-row__value">24/7</span>
                                </div>
                                <div className="hours-row">
                                    <span className="hours-row__label">Oficinas:</span>
                                    <span className="hours-row__value">Lun-Vie 9-18h</span>
                                </div>
                            </div>
                            <p className="hours-response">Respuesta promedio: 15 minutos</p>
                        </div>

                        <div className="contact-card faq-card">
                            <h2 className="contact-card__title">¿Tienes una pregunta rápida?</h2>
                            <p className="faq-card__text">
                                Consulta nuestras preguntas frecuentes, probablemente ya tenemos la respuesta.
                            </p>
                            <button className="faq-btn">Ver FAQ</button>
                        </div>
                    </aside>

                    {/* RIGHT COLUMN - FORM */}
                    <div className="contact-form-card">
                        <header className="form-header">
                            <h2 className="form-header__title">Envíanos un Mensaje</h2>
                            <p className="form-header__sub">Completa el formulario y te responderemos en menos de 15 minutos</p>
                        </header>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Nombre Completo *</label>
                                <input className="form-input" type="text" id="name" placeholder="Juan Pérez" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email *</label>
                                <input className="form-input" type="email" id="email" placeholder="juan@ejemplo.com" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Teléfono (Opcional)</label>
                                <input className="form-input" type="tel" id="phone" placeholder="+34 600 000 000" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Asunto *</label>
                                <select className="form-select" id="subject" required>
                                    <option value="">Selecciona un tema</option>
                                    <option value="support">Soporte Técnico</option>
                                    <option value="sales">Ventas</option>
                                    <option value="billing">Facturación</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>

                            <div className="form-group form-group--full">
                                <label className="form-label" htmlFor="message">Mensaje *</label>
                                <textarea className="form-textarea" id="message" placeholder="Cuéntanos cómo podemos ayudarte..." required></textarea>
                                <p className="form-hint">Mínimo 20 caracteres. Sé lo más específico posible para poder ayudarte mejor.</p>
                            </div>

                            <button className="form-submit-btn" type="submit">
                                Enviar Mensaje <SendIcon size={18} />
                            </button>

                            <footer className="form-footer">
                                Al enviar este formulario, aceptas nuestra <a href="/privacidad">Política de Privacidad</a>
                            </footer>
                        </form>
                    </div>
                </div>
            </section>

            {/* OTHER CONTACT METHODS */}
            <section className="contact-others contact-container">
                <header>
                    <h2 className="contact-others__title">Otras Formas de Contacto</h2>
                    <p className="contact-others__sub">Elige el canal que prefieras para comunicarte con nosotros</p>
                </header>

                <div className="others-grid">
                    <div className="other-card">
                        <div className="other-card__icon whatsapp">
                            <span style={{ fontSize: '24px' }}>💬</span>
                        </div>
                        <h3 className="other-card__title">WhatsApp</h3>
                        <p className="other-card__text">Chatea directamente con nosotros</p>
                        <a href="#" className="other-btn other-btn--whatsapp">Abrir WhatsApp</a>
                    </div>

                    <div className="other-card">
                        <div className="other-card__icon telegram">
                            <SendIcon size={24} />
                        </div>
                        <h3 className="other-card__title">Telegram</h3>
                        <p className="other-card__text">Soporte instantáneo vía Telegram</p>
                        <a href="#" className="other-btn other-btn--telegram">Abrir Telegram</a>
                    </div>

                    <div className="other-card">
                        <div className="other-card__icon call">
                            <Phone size={24} />
                        </div>
                        <h3 className="other-card__title">Llamada Directa</h3>
                        <p className="other-card__text">Habla con un especialista ahora</p>
                        <a href="#" className="other-btn other-btn--call">Llamar Ahora</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
