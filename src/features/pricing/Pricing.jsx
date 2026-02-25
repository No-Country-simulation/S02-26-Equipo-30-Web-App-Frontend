import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="pr-hero">
                <div className="pr-badge">Planes para Vendedores</div>
                <h1>Vende Más Rápido <br /><span>Paga Menos</span></h1>
                <p>Elige el plan perfecto para tus objetivos. Primer mes gratis en todos los planes Premium y VIP.</p>
                <div className="pr-hero-tag">
                    <span>✨</span> 0% comisión el primer mes - Sin contratos a largo plazo
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pr-section">
                <div className="pr-cards-grid">
                    {/* Basic Card */}
                    <div className="pr-card">
                        <div className="pr-card-icon">☆</div>
                        <h3>Básico</h3>
                        <p>Perfecto para empezar a vender</p>
                        <div className="price">Gratis <span>/ Siempre</span></div>
                        <button className="pr-btn pr-btn-basic">Comienza Gratis</button>
                        <span className="include-label">INCLUYE:</span>
                        <ul className="pr-features-list">
                            <li><span className="pr-check">✓</span> Hasta 3 anuncios activos</li>
                            <li><span className="pr-check">✓</span> Hasta 10 fotos por anuncio</li>
                            <li><span className="pr-check">✓</span> Verificación veterinaria básica</li>
                            <li><span className="pr-check">✓</span> Estadísticas básicas</li>
                            <li><span className="pr-check">✓</span> Soporte por email</li>
                            <li><span className="pr-check">✓</span> Sistema de búsqueda estándar</li>
                        </ul>
                    </div>

                    {/* Premium Card */}
                    <div className="pr-card featured">
                        <div className="pr-featured-label">Más Popular</div>
                        <div className="pr-card-icon">📈</div>
                        <h3>Premium</h3>
                        <p>Para vendedores serios</p>
                        <div className="price">€49 <span>/ mes</span></div>
                        <button className="pr-btn pr-btn-premium">Empezar Gratis Ahora</button>
                        <span className="include-label">TODO EN BÁSICO, MÁS:</span>
                        <ul className="pr-features-list">
                            <li><span className="pr-check">✓</span> Anuncios ilimitados</li>
                            <li><span className="pr-check">✓</span> Hasta 20 fotos HD por anuncio</li>
                            <li><span className="pr-check">✓</span> Vídeos de rendimiento (hasta 5)</li>
                            <li><span className="pr-check">✓</span> Verificación veterinaria completa</li>
                            <li><span className="pr-check">✓</span> Destacado en resultados</li>
                            <li><span className="pr-check">✓</span> Estadísticas avanzadas en tiempo real</li>
                            <li><span className="pr-check">✓</span> Badge "Vendedor Premium"</li>
                            <li><span className="pr-check">✓</span> Soporte prioritario 24/7</li>
                            <li><span className="pr-check">✓</span> Mensajes en redes sociales</li>
                        </ul>
                    </div>

                    {/* VIP Card */}
                    <div className="pr-card dark">
                        <div className="pr-card-icon">👑</div>
                        <h3>VIP Elite</h3>
                        <p>Máxima exposición y ventas</p>
                        <div className="price">€149 <span>/ mes</span></div>
                        <button className="pr-btn pr-btn-premium">Empezar VIP Gratis</button>
                        <span className="include-label">TODO EN PREMIUM, MÁS:</span>
                        <ul className="pr-features-list">
                            <li><span className="pr-check">✓</span> Posicionamiento TOP prioritario</li>
                            <li><span className="pr-check">✓</span> Sesión fotográfica profesional incluida</li>
                            <li><span className="pr-check">✓</span> Vídeos promocionales montados</li>
                            <li><span className="pr-check">✓</span> Campaña de marketing dedicada</li>
                            <li><span className="pr-check">✓</span> Featured en página principal</li>
                            <li><span className="pr-check">✓</span> Newsletter semanal a 15k+ suscriptores</li>
                            <li><span className="pr-check">✓</span> Account manager personal dedicado</li>
                            <li><span className="pr-check">✓</span> Soporte VIP con línea directa</li>
                            <li><span className="pr-check">✓</span> Garantía de venta en 90 días</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="pr-section pr-comparison-section">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2>Comparación Detallada</h2>
                    <p>Todas las características en un solo vistazo</p>
                </div>
                <div className="pr-table-container">
                    <table className="pr-table">
                        <thead>
                            <tr>
                                <th>Características</th>
                                <th>Básico</th>
                                <th>Premium</th>
                                <th>VIP Elite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Anuncios activos</td>
                                <td>3</td>
                                <td>Ilimitados</td>
                                <td>Ilimitados</td>
                            </tr>
                            <tr>
                                <td>Fotos por anuncio</td>
                                <td>10</td>
                                <td>20 HD</td>
                                <td>30 HD Profesional</td>
                            </tr>
                            <tr>
                                <td>Vídeos</td>
                                <td>—</td>
                                <td>Hasta 5</td>
                                <td>Ilimitados Pro</td>
                            </tr>
                            <tr>
                                <td>Verificación veterinaria</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>Destacado en resultados</td>
                                <td>—</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>Featured página principal</td>
                                <td>—</td>
                                <td>—</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>Soporte</td>
                                <td>Email</td>
                                <td>24/7 Prioritario</td>
                                <td>VIP + Manager</td>
                            </tr>
                            <tr>
                                <td>Comisión por venta</td>
                                <td>5%</td>
                                <td>1.5%</td>
                                <td>0.5%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Why it works / Stats */}
            <section className="pr-stats-banner">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2>Por Qué Funciona</h2>
                    <p>Resultados reales de nuestros vendedores</p>
                </div>
                <div className="pr-stats-grid">
                    <div>
                        <span className="pr-stat-val">3x</span>
                        <span className="pr-stat-label">Más Rápido con VIP</span>
                    </div>
                    <div>
                        <span className="pr-stat-val">15k+</span>
                        <span className="pr-stat-label">Visitantes/Mes</span>
                    </div>
                    <div>
                        <span className="pr-stat-val">94%</span>
                        <span className="pr-stat-label">Tasa de Conversión</span>
                    </div>
                    <div>
                        <span className="pr-stat-val">€45k</span>
                        <span className="pr-stat-label">Precio Promedio</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="pr-section">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2>Preguntas Frecuentes</h2>
                </div>
                <div className="pr-faq-grid">
                    <div className="pr-faq-item">
                        <h4>¿Puedo cambiar de plan en cualquier momento?</h4>
                        <p>Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican inmediatamente y ajustamos el prorrateo.</p>
                    </div>
                    <div className="pr-faq-item">
                        <h4>¿Hay contratos a largo plazo?</h4>
                        <p>No. Todos nuestros planes son mes a mes. Puedes cancelar en cualquier momento sin penalización.</p>
                    </div>
                    <div className="pr-faq-item">
                        <h4>¿Qué incluye el primer mes gratis?</h4>
                        <p>Los planes Premium y VIP incluyen el primer mes completamente gratis. Sin tarjeta de crédito necesaria para empezar.</p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pr-bottom-cta">
                <h2>¿Listo para Vender Más?</h2>
                <p>Únete a cientos de vendedores exitosos y vende tu caballo más rápido</p>
                <div className="pr-cta-btns">
                    <button className="pr-btn-large pr-btn-premium">Empezar Gratis Ahora</button>
                    <button className="pr-btn-large pr-btn-outline">Hablar con Ventas</button>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
