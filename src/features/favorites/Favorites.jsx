import React from 'react';
import './Favorites.css';

const Favorites = () => {
    return (
        <div className="dashboard-container">
            {/* Header / Stats Section */}
            <header className="db-header">
                <div className="db-welcome">
                    <h1>Bienvenido, Alexandra Bennett</h1>
                    <p>Tu colección ecuestre personalizada</p>
                    <div className="db-stats-grid">
                        <div className="db-stat-card">
                            <div className="db-stat-label"><span>❤️</span> Guardados</div>
                            <div className="db-stat-value">4</div>
                        </div>
                        <div className="db-stat-card">
                            <div className="db-stat-label"><span>💰</span> Precio Promedio</div>
                            <div className="db-stat-value">$67k</div>
                        </div>
                        <div className="db-stat-card">
                            <div className="db-stat-label"><span>⭐</span> Trust Score</div>
                            <div className="db-stat-value">97</div>
                        </div>
                        <div className="db-stat-card">
                            <div className="db-stat-label"><span>👑</span> VIP Premium</div>
                            <div className="db-stat-value">4</div>
                        </div>
                    </div>
                </div>
                <button className="db-add-btn">
                    <span>+</span> Agregar Caballo
                </button>
            </header>

            {/* VIP Banner */}
            <div className="db-vip-banner">
                <div className="db-vip-info">
                    <h4>¡Tienes 4 caballos VIP en tu lista!</h4>
                    <p>Caballos de élite con verificación completa y garantía extendida de 60 días</p>
                </div>
                <button className="db-vip-btn">Ver Premium →</button>
            </div>

            {/* Main Layout: (Grid + Sidebar) */}
            <div className="db-main-layout">
                {/* Left Column: Saved Horses */}
                <div className="db-content-box">
                    <div className="db-box-header">
                        <div className="db-box-title">
                            <span>❤️</span>
                            <div>
                                <h3>Mis Caballos Guardados</h3>
                                <p>Tu selección personalizada</p>
                            </div>
                        </div>
                        <span className="db-count-badge">4 Total</span>
                    </div>

                    <div className="db-horse-grid">
                        {/* Horse Card 1 */}
                        <div className="db-horse-card">
                            <div className="db-horse-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop")' }}>
                                <div className="db-badge-row">
                                    <span className="db-tag db-tag-vip">VIP</span>
                                    <span className="db-tag db-tag-destacado">Destacado</span>
                                </div>
                            </div>
                            <div className="db-horse-info">
                                <div className="db-horse-header">
                                    <h4>Midnight Star</h4>
                                    <span className="price">$66,022</span>
                                </div>
                                <div className="db-horse-meta">
                                    <span>8 years</span> • <span>15.1 hh</span> • <span>Hunter</span>
                                </div>
                                <div className="db-trust-score">
                                    <div className="db-trust-row">
                                        <span>Trust Score</span>
                                        <span>95/100</span>
                                    </div>
                                    <div className="db-trust-bar"><div className="db-trust-fill" style={{ width: '95%' }}></div></div>
                                </div>
                            </div>
                        </div>

                        {/* Horse Card 2 */}
                        <div className="db-horse-card">
                            <div className="db-horse-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534073733318-7f287900b135?q=80&w=2072&auto=format&fit=crop")' }}>
                                <div className="db-badge-row">
                                    <span className="db-tag db-tag-vip">VIP</span>
                                    <span className="db-tag db-tag-destacado">Destacado</span>
                                </div>
                            </div>
                            <div className="db-horse-info">
                                <div className="db-horse-header">
                                    <h4>Royal Symphony</h4>
                                    <span className="price">$58,020</span>
                                </div>
                                <div className="db-horse-meta">
                                    <span>6 years</span> • <span>16.1 hh</span> • <span>Western Performance</span>
                                </div>
                                <div className="db-trust-score">
                                    <div className="db-trust-row">
                                        <span>Trust Score</span>
                                        <span>100/100</span>
                                    </div>
                                    <div className="db-trust-bar"><div className="db-trust-fill" style={{ width: '100%' }}></div></div>
                                </div>
                            </div>
                        </div>

                        {/* Horse Card 3 */}
                        <div className="db-horse-card">
                            <div className="db-horse-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1974&auto=format&fit=crop")' }}>
                                <div className="db-badge-row">
                                    <span className="db-tag db-tag-vip">VIP</span>
                                    <span className="db-tag db-tag-destacado">Destacado</span>
                                </div>
                            </div>
                            <div className="db-horse-info">
                                <div className="db-horse-header">
                                    <h4>Silver Cloud</h4>
                                    <span className="price">$75,486</span>
                                </div>
                                <div className="db-horse-meta">
                                    <span>8 years</span> • <span>17.2 hh</span> • <span>Cutting</span>
                                </div>
                                <div className="db-trust-score">
                                    <div className="db-trust-row">
                                        <span>Trust Score</span>
                                        <span>93/100</span>
                                    </div>
                                    <div className="db-trust-bar"><div className="db-trust-fill" style={{ width: '93%' }}></div></div>
                                </div>
                            </div>
                        </div>

                        {/* Horse Card 4 */}
                        <div className="db-horse-card">
                            <div className="db-horse-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528659550346-407399895c2f?q=80&w=2028&auto=format&fit=crop")' }}>
                                <div className="db-badge-row">
                                    <span className="db-tag db-tag-vip">VIP</span>
                                    <span className="db-tag db-tag-destacado">Destacado</span>
                                </div>
                            </div>
                            <div className="db-horse-info">
                                <div className="db-horse-header">
                                    <h4>Golden Promise</h4>
                                    <span className="price">$69,373</span>
                                </div>
                                <div className="db-horse-meta">
                                    <span>6 years</span> • <span>17.2 hh</span> • <span>Eventing</span>
                                </div>
                                <div className="db-trust-score">
                                    <div className="db-trust-row">
                                        <span>Trust Score</span>
                                        <span>100/100</span>
                                    </div>
                                    <div className="db-trust-bar"><div className="db-trust-fill" style={{ width: '100%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="db-sidebar">
                    {/* Quick Actions */}
                    <div className="db-widget">
                        <h4><span>⚡</span> Acciones Rápidas</h4>
                        <div className="db-quick-actions">
                            <button className="db-action-btn primary">Explorar Caballos</button>
                            <button className="db-action-btn secondary">Ver Colección VIP</button>
                            <button className="db-action-btn secondary">Editar Perfil</button>
                        </div>
                    </div>

                    {/* Account Status */}
                    <div className="db-widget" style={{ backgroundColor: '#ecfdf5', borderColor: '#d1fae5' }}>
                        <h4 style={{ color: '#065f46' }}><span>🛡️</span> Estado de la Cuenta</h4>
                        <div className="db-status-item">
                            <div className="db-status-icon">✉</div>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Email Verificado</p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>asdasd@asd.com</p>
                            </div>
                        </div>
                        <div className="db-status-item">
                            <div className="db-status-icon">📅</div>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Miembro Desde</p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Febrero 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Recommended for you */}
                    <div className="db-widget">
                        <h4><span>⭐</span> Recomendado para Ti</h4>
                        <div className="db-reco-item">
                            <div className="db-reco-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?q=80&w=400&auto=format&fit=crop")' }}></div>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Copper Sunset</p>
                                <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '0.8rem' }}>$74k • <span style={{ color: '#64748b' }}>Nashville</span></p>
                            </div>
                        </div>
                        <div className="db-reco-item">
                            <div className="db-reco-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=400&auto=format&fit=crop")' }}></div>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Eclipse</p>
                                <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '0.8rem' }}>$62k • <span style={{ color: '#64748b' }}>Scottsdale</span></p>
                            </div>
                        </div>
                        <button className="db-action-btn secondary" style={{ marginTop: '12px', textAlign: 'center' }}>
                            Ver Más Recomendaciones →
                        </button>
                    </div>

                    {/* Notifications */}
                    <div className="db-widget">
                        <h4><span>🔔</span> Notificaciones</h4>
                        <div style={{ padding: '16px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #dbeafe' }}>
                            <p style={{ fontWeight: '700', color: '#1e40af', fontSize: '0.85rem', marginBottom: '8px' }}>🔔 Nuevos caballos disponibles</p>
                            <p style={{ color: '#3b82f6', fontSize: '0.8rem' }}>3 caballos que coinciden con tus criterios fueron agregados hoy</p>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Bottom Section: Recently Viewed */}
            <section className="db-recent-section">
                <div className="db-box-title">
                    <span>📈</span>
                    <div>
                        <h3>Vistos Recientemente</h3>
                        <p>Caballos que has explorado</p>
                    </div>
                </div>
                <div className="db-recent-row">
                    <div className="db-recent-card">
                        <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop" alt="Horse" />
                        <div className="db-recent-overlay">
                            <p style={{ fontWeight: '700' }}>Eclipse</p>
                            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Belgian Warmblood</p>
                        </div>
                    </div>
                    <div className="db-recent-card">
                        <img src="https://images.unsplash.com/photo-1534073733318-7f287900b135?q=80&w=600&auto=format&fit=crop" alt="Horse" />
                        <div className="db-recent-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                            <p style={{ fontWeight: '700' }}>Thunder Strike</p>
                            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Hanoverian</p>
                        </div>
                    </div>
                    <div className="db-recent-card">
                        <img src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=600&auto=format&fit=crop" alt="Horse" />
                        <div className="db-recent-overlay">
                            <p style={{ fontWeight: '700' }}>Diamond Belle</p>
                            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Holsteiner</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Favorites;
