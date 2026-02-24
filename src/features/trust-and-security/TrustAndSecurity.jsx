import React from 'react';
import './TrustAndSecurity.css';

const TrustAndSecurity = () => {
    return (
        <div className="trust-security-page">
            {/* Hero Section */}
            <section className="ts-hero">
                <div className="ts-badge">Tu Seguridad es nuestra Prioridad</div>
                <h1>Confianza y Seguridad <br /><span>en Cada Transacción</span></h1>
                <p>Sistemas de verificación multicapa, garantías reales y soporte 24/7 para proteger cada compra y venta.</p>
                <div className="ts-hero-btns">
                    <button className="ts-btn ts-btn-primary">Comprar con Confianza</button>
                    <button className="ts-btn ts-btn-secondary">Contactar Soporte</button>
                </div>
            </section>

            {/* Nuestros Pilares */}
            <section className="ts-section">
                <div className="ts-section-header">
                    <span className="ts-section-label">NUESTROS PILARES</span>
                    <h2>Cómo Protegemos <span>Tu Inversión</span></h2>
                </div>
                <div className="ts-pillars-grid">
                    <div className="ts-card">
                        <div className="ts-icon-box green">✓</div>
                        <h3>Verificación Veterinaria</h3>
                        <p>Cada caballo pasa por un examen completo realizado por veterinarios certificados antes de aparecer en la plataforma.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Examen físico completo de 47 puntos</li>
                            <li><span className="ts-check-icon">✓</span> Rayos X y análisis de sangre actualizados</li>
                            <li><span className="ts-check-icon">✓</span> Historial médico verificado y certificado</li>
                        </ul>
                    </div>
                    <div className="ts-card">
                        <div className="ts-icon-box brown">★</div>
                        <h3>Verificación de Vendedores</h3>
                        <p>Sistema de puntuación de credibilidad de 100 puntos basado en historial, reseñas verificadas y documentación.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Verificación de identidad obligatoria</li>
                            <li><span className="ts-check-icon">✓</span> Historial de ventas auditado</li>
                            <li><span className="ts-check-icon">✓</span> Reseñas verificadas de compradores reales</li>
                        </ul>
                    </div>
                    <div className="ts-card">
                        <div className="ts-icon-box teal">🛡</div>
                        <h3>Pagos Protegidos</h3>
                        <p>Sistema de pago seguro con retención de fondos hasta confirmación de entrega satisfactoria.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Sin traspaso bancario de alto riesgo</li>
                            <li><span className="ts-check-icon">✓</span> Retención de fondos en escrow</li>
                            <li><span className="ts-check-icon">✓</span> Protección contra fraude automatizada</li>
                        </ul>
                    </div>
                    <div className="ts-card">
                        <div className="ts-icon-box brown">♥</div>
                        <h3>Garantía 30 Días</h3>
                        <p>Si no estás 100% satisfecho con tu compra, devolución con protección de seguros durante 30 días.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Reembolso completo garantizado</li>
                            <li><span className="ts-check-icon">✓</span> Sin preguntas ni justificaciones</li>
                            <li><span className="ts-check-icon">✓</span> Proceso de devolución en 48h</li>
                        </ul>
                    </div>
                    <div className="ts-card">
                        <div className="ts-icon-box green">💬</div>
                        <h3>Soporte 24/7</h3>
                        <p>Equipo especializado de expertos ecuestres disponible en cualquier momento para resolver tus dudas.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Chat en vivo con especialistas</li>
                            <li><span className="ts-check-icon">✓</span> Línea de atención directa prioritaria</li>
                            <li><span className="ts-check-icon">✓</span> Respuesta en menos de 15 minutos</li>
                        </ul>
                    </div>
                    <div className="ts-card">
                        <div className="ts-icon-box brown">📄</div>
                        <h3>Documentación Legal</h3>
                        <p>Todos los contratos, certificados y papeleo en orden. Asesoría legal incluida en cada transacción.</p>
                        <ul className="ts-checklist">
                            <li><span className="ts-check-icon">✓</span> Contratos digitales certificados</li>
                            <li><span className="ts-check-icon">✓</span> Transferencia de propiedad asistida</li>
                            <li><span className="ts-check-icon">✓</span> Asesoría legal gratuita incluida</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Proceso de Compra */}
            <section className="ts-section ts-steps-section">
                <div className="ts-section-header">
                    <span className="ts-section-label">PROCESO DE COMPRA</span>
                    <h2>Protección en Cada Paso</h2>
                    <p>Desde el primer contacto hasta la entrega final, estamos contigo</p>
                </div>
                <div className="ts-steps-grid">
                    <div className="ts-step-card">
                        <div className="ts-step-num">1</div>
                        <h4>Exploración Segura</h4>
                        <p>Solo caballos verificados mediante auditoría externa.</p>
                    </div>
                    <div className="ts-step-card">
                        <div className="ts-step-num">2</div>
                        <h4>Contacto Directo</h4>
                        <p>Chat encriptado. Vistas coordinadas por nosotros.</p>
                    </div>
                    <div className="ts-step-card">
                        <div className="ts-step-num">3</div>
                        <h4>Pago Protegido</h4>
                        <p>Escrow bancario hasta confirmación de entrega.</p>
                    </div>
                    <div className="ts-step-card">
                        <div className="ts-step-num">4</div>
                        <h4>Garantía Activa</h4>
                        <p>30 días de protección legal. Soporte continuo.</p>
                    </div>
                </div>
            </section>

            {/* Resolución de Conflictos */}
            <section className="ts-section">
                <div className="ts-section-header">
                    <span className="ts-section-label">RESOLUCIÓN DE CONFLICTOS</span>
                    <h2>Siempre de Tu Lado</h2>
                </div>
                <div className="ts-card">
                    <div className="ts-checklist">
                        <div style={{ marginBottom: '24px' }}>
                            <h4 style={{ marginBottom: '8px' }}>Mediación Profesional</h4>
                            <p>En caso de cualquier desacuerdo, nuestro equipo de mediación profesional intervendrá en menos de 24 horas para encontrar una solución justa para ambas partes.</p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h4 style={{ marginBottom: '8px' }}>Respuesta Rápida</h4>
                            <p>El 97% de los casos se resuelven en menos de 72 horas. Siempre comprometidos en encontrar la mejor solución sin demoras innecesarias.</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '8px' }}>Protección del Comprador</h4>
                            <p>Si el caballo no coincide con la descripción o tiene problemas ocultos, garantizamos el retorno del dinero más una compensación por tiempo y gastos de evaluación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Números */}
            <section className="ts-numbers-banner">
                <div className="ts-numbers-grid">
                    <div>
                        <span className="ts-stat-val">98.5%</span>
                        <span className="ts-stat-label">Satisfacción del Cliente</span>
                    </div>
                    <div>
                        <span className="ts-stat-val">2,400+</span>
                        <span className="ts-stat-label">Caballos Verificados</span>
                    </div>
                    <div>
                        <span className="ts-stat-val">$0</span>
                        <span className="ts-stat-label">Fraudes Reportados</span>
                    </div>
                    <div>
                        <span className="ts-stat-val">15min</span>
                        <span className="ts-stat-label">Tiempo de Respuesta</span>
                    </div>
                </div>
            </section>

            {/* Preguntas */}
            <section className="ts-questions">
                <div className="ts-icon-box green" style={{ margin: '0 auto 24px' }}>?</div>
                <h2>¿Tienes Preguntas?</h2>
                <p>Nuestro equipo está disponible 24/7 para resolver cualquier duda sobre seguridad y confianza</p>
                <div className="ts-hero-btns" style={{ marginTop: '32px' }}>
                    <button className="ts-btn ts-btn-primary">Contactar Soporte</button>
                    <button className="ts-btn ts-btn-secondary">Cómo Funciona →</button>
                </div>
            </section>
        </div>
    );
};

export default TrustAndSecurity;
