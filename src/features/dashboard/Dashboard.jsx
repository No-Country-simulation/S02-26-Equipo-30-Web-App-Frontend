/* Dashboard.jsx */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import {
    Info,
    Dollar,
    Award,
    Shield,
    Star,
    Support,
    Crown,
    Search,
    ArrowRight,
    Sparkles,
    Loader2
} from '@shared/branding/icons';

// Custom Icons for Dashboard
const PanelIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

const HorseIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
        <path d="M12 12L19 5"></path>
    </svg>
);

const EyeIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const MessageIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

import { useEffect } from 'react';
import horseService from '../horse-management/horseService';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [userHorses, setUserHorses] = useState([]);
    const [loadingHorses, setLoadingHorses] = useState(false);
    const [errorHorses, setErrorHorses] = useState(null);

    const fetchUserHorses = async () => {
        setLoadingHorses(true);
        setErrorHorses(null);
        try {
            const data = await horseService.getUserHorses();
            setUserHorses(data);
        } catch (err) {
            console.error('Error fetching user horses:', err);
            setErrorHorses(err.message);
        } finally {
            setLoadingHorses(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'my-horses') {
            fetchUserHorses();
        }
    }, [activeTab]);

    return (
        <main className="db">
            <div className="db-container">
                {/* HERO PANEL */}
                <header className="db-panel-hero">
                    <div className="db-hero-top">
                        <div className="db-user-info">
                            <div className="db-avatar-circle">
                                <PanelIcon size={32} />
                            </div>
                            <div className="db-welcome">
                                <h1 className="db-welcome__title">Panel de Vendedor</h1>
                                <p className="db-welcome__sub">Hola, Heritage Equestrian</p>
                                <div className="db-trust-score">
                                    <span>🛡️ Trust Score: 98%</span>
                                    <span>Excelente</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                className="db-btn-add"
                                style={{ background: '#6366f1' }}
                                onClick={async () => {
                                    try {
                                        console.log('Fetching horses...');
                                        const horses = await horseService.getHorses();
                                        console.log('Horses received:', horses);
                                        alert('Datos recibidos. Revisa la consola (F12).');
                                    } catch (err) {
                                        console.error('Error fetching horses:', err);
                                        alert('Error al obtener caballos: ' + err.message);
                                    }
                                }}
                            >
                                <span>🔍</span> Test API GET
                            </button>
                            <button
                                className="db-btn-add"
                                onClick={() => navigate('/caballo/nuevo')}
                            >
                                <span>+</span> Agregar Caballo
                            </button>
                        </div>
                    </div>

                    <div className="db-hero-stats">
                        <div className="db-hstat">
                            <div className="db-hstat__header">
                                <span>Ingresos</span>
                                <ArrowRight size={14} style={{ transform: 'rotate(-45deg)', opacity: 0.5 }} />
                            </div>
                            <div className="db-hstat__value">$185k</div>
                            <div className="db-hstat__meta">
                                <span className="db-hstat__trend">↗ +23.5%</span> este mes
                            </div>
                        </div>

                        <div className="db-hstat">
                            <div className="db-hstat__header">
                                <span>Activos</span>
                                <HorseIcon size={14} style={{ opacity: 0.5 }} />
                            </div>
                            <div className="db-hstat__value">3</div>
                            <div className="db-hstat__meta">de 12 totales</div>
                        </div>

                        <div className="db-hstat">
                            <div className="db-hstat__header">
                                <span>Vistas</span>
                                <EyeIcon size={14} style={{ opacity: 0.5 }} />
                            </div>
                            <div className="db-hstat__value">1247</div>
                            <div className="db-hstat__meta">
                                <span className="db-hstat__trend">+12%</span> semana
                            </div>
                        </div>

                        <div className="db-hstat">
                            <div className="db-hstat__header">
                                <span>Consultas</span>
                                <MessageIcon size={14} style={{ opacity: 0.5 }} />
                            </div>
                            <div className="db-hstat__value">38</div>
                            <div className="db-hstat__meta">
                                <span className="db-hstat__trend">+15%</span> semana
                            </div>
                        </div>
                    </div>
                </header>

                {/* TABS Navigation */}
                <nav className="db-tabs-wrap">
                    <div className="db-tabs">
                        <div
                            className={`db-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <PanelIcon size={16} /> Dashboard
                        </div>
                        <div
                            className={`db-tab ${activeTab === 'my-horses' ? 'active' : ''}`}
                            onClick={() => setActiveTab('my-horses')}
                        >
                            <span>📋</span> Mis Caballos ({userHorses.length})
                        </div>
                    </div>
                </nav>

                {/* MAIN CONTENT AREA */}
                <div className="db-main-grid">
                    {activeTab === 'dashboard' ? (
                        <>
                            {/* LEFT COLUMN */}
                            <section className="db-stats-section">
                                {/* Summary Earnings */}
                                <div className="db-card db-summary-card">
                                    <div className="db-summary-left">
                                        <p className="db-summary-label">Ingresos Totales</p>
                                        <h2 className="db-summary-val">$185,000</h2>
                                        <span className="db-summary-trend">↗ +23.5% este mes</span>

                                        <div className="db-summary-grid">
                                            <div>
                                                <p className="db-smini-label">Este Mes</p>
                                                <p className="db-smini-val">$92,000</p>
                                            </div>
                                            <div>
                                                <p className="db-smini-label">Ahorros Comisiones</p>
                                                <p className="db-smini-val teal">$8,400</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="db-sicon-box">
                                        <Dollar size={32} />
                                    </div>
                                </div>

                                {/* Quad Grid Stats */}
                                <div className="db-quad-stats">
                                    <div className="db-card db-qstat">
                                        <div>
                                            <p className="db-qstat__label">Tasa de Conversión</p>
                                            <h3 className="db-qstat__val">12.5%</h3>
                                            <p className="db-qstat__meta">Por encima del promedio</p>
                                        </div>
                                        <div className="db-qstat__icon">🌐</div>
                                    </div>
                                    <div className="db-card db-qstat">
                                        <div>
                                            <p className="db-qstat__label">Tiempo de Respuesta</p>
                                            <h3 className="db-qstat__val">2h 15m</h3>
                                            <p className="db-qstat__meta">Promedio</p>
                                        </div>
                                        <div className="db-qstat__icon">🕒</div>
                                    </div>
                                    <div className="db-card db-qstat">
                                        <div>
                                            <p className="db-qstat__label">Vendidos Este Mes</p>
                                            <h3 className="db-qstat__val">2</h3>
                                            <p className="db-qstat__meta">Caballos</p>
                                        </div>
                                        <div className="db-qstat__icon">✅</div>
                                    </div>
                                    <div className="db-card db-qstat">
                                        <div>
                                            <p className="db-qstat__label">En Revisión</p>
                                            <h3 className="db-qstat__val">0</h3>
                                            <p className="db-qstat__meta">Listados</p>
                                        </div>
                                        <div className="db-qstat__icon">🕒</div>
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="db-card db-activity-card">
                                    <div className="db-card-header">
                                        <div className="db-header-icon">
                                            <PanelIcon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="db-card-title">Actividad Reciente</h3>
                                            <p className="db-card-sub">Últimas interacciones con tus listados</p>
                                        </div>
                                    </div>

                                    <div className="db-activity-list">
                                        <div className="db-activity-item">
                                            <div className="db-act-content">
                                                <div className="db-act-icon msg">
                                                    <MessageIcon size={18} />
                                                </div>
                                                <div>
                                                    <p className="db-act-title">Nueva consulta de María González</p>
                                                    <p className="db-act-sub">Interesada en Thunder Strike</p>
                                                </div>
                                            </div>
                                            <span className="db-act-time">2 horas</span>
                                        </div>

                                        <div className="db-activity-item">
                                            <div className="db-act-content">
                                                <div className="db-act-icon view">
                                                    <EyeIcon size={18} />
                                                </div>
                                                <div>
                                                    <p className="db-act-title">15 nuevas vistas</p>
                                                    <p className="db-act-sub">Midnight Glory</p>
                                                </div>
                                            </div>
                                            <span className="db-act-time">3 horas</span>
                                        </div>

                                        <div className="db-activity-item">
                                            <div className="db-act-content">
                                                <div className="db-act-icon offer">
                                                    <Dollar size={18} />
                                                </div>
                                                <div>
                                                    <p className="db-act-title">Oferta recibida: $48,000</p>
                                                    <p className="db-act-sub">Storm Chaser</p>
                                                </div>
                                            </div>
                                            <span className="db-act-time">5 horas</span>
                                        </div>

                                        <div className="db-activity-item">
                                            <div className="db-act-content">
                                                <div className="db-act-icon msg">
                                                    <MessageIcon size={18} />
                                                </div>
                                                <div>
                                                    <p className="db-act-title">Nueva consulta de Carlos Ramírez</p>
                                                    <p className="db-act-sub">Interesado en Thunder Strike</p>
                                                </div>
                                            </div>
                                            <span className="db-act-time">1 día</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* RIGHT SIDEBAR */}
                            <aside className="db-sidebar">
                                {/* Listing Statuses */}
                                <div className="db-side-card">
                                    <div className="db-side-header">Estado de Listados</div>
                                    <div className="db-side-list">
                                        <div className="db-stat-row">
                                            <div className="db-stat-label">
                                                <div className="db-stat-icon active">
                                                    <Shield size={14} />
                                                </div> Activos
                                            </div>
                                            <span className="db-stat-val active">3</span>
                                        </div>
                                        <div className="db-stat-row">
                                            <div className="db-stat-label">
                                                <div className="db-stat-icon review">
                                                    <Info size={14} />
                                                </div> En Revisión
                                            </div>
                                            <span className="db-stat-val review">0</span>
                                        </div>
                                        <div className="db-stat-row">
                                            <div className="db-stat-label">
                                                <div className="db-stat-icon sold">
                                                    <Star size={14} />
                                                </div> Vendidos
                                            </div>
                                            <span className="db-stat-val sold">2</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Dashboard Upgrade */}
                                <div className="db-side-card db-promo-card">
                                    <h3 className="db-promo-header">👑 Destaca tus Listados</h3>
                                    <p className="db-promo-title">Llega a más compradores premium</p>
                                    <ul className="db-promo-list">
                                        <li className="db-promo-item">✨ Aparece en la sección VIP Premium</li>
                                        <li className="db-promo-item">📈 10x más visibilidad</li>
                                        <li className="db-promo-item">⏳ Garantía extendida de 60 días</li>
                                    </ul>
                                    <button className="db-btn-promo">
                                        Ver Premium 👑
                                    </button>
                                </div>

                                {/* Seller Tips */}
                                <div className="db-side-card db-tips-card">
                                    <h3 className="db-promo-header">📈 Mejora tus Ventas</h3>
                                    <div className="db-tip-item">
                                        <div className="db-tip-icon">✨</div>
                                        <div>
                                            <p className="db-tip-text">Videos de rendimiento</p>
                                            <p className="db-tip-sub">3x más consultas</p>
                                        </div>
                                    </div>
                                    <div className="db-tip-item">
                                        <div className="db-tip-icon">📄</div>
                                        <div>
                                            <p className="db-tip-text">Documentación completa</p>
                                            <p className="db-tip-sub">Aumenta confianza</p>
                                        </div>
                                    </div>
                                    <div className="db-tip-item">
                                        <div className="db-tip-icon">⚡</div>
                                        <div>
                                            <p className="db-tip-text">Respuesta rápida</p>
                                            <p className="db-tip-sub">Mantén tu score alto</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </>
                    ) : (
                        /* MY HORSES GRID VIEW */
                        <section className="db-stats-section" style={{ gridColumn: '1 / -1' }}>
                            <div className="db-horse-grid">
                                {loadingHorses ? (
                                    <div className="db-no-horses">
                                        <Sparkles className="animate-spin" size={48} />
                                        <p>Cargando tus caballos...</p>
                                    </div>
                                ) : errorHorses ? (
                                    <div className="db-no-horses">
                                        <span>⚠️</span>
                                        <h3>Error al cargar</h3>
                                        <p>{errorHorses}</p>
                                        <button onClick={fetchUserHorses} className="db-btn-add" style={{ margin: '1rem auto' }}>Reintentar</button>
                                    </div>
                                ) : userHorses.length > 0 ? (
                                    userHorses.map(horse => (
                                        <div key={horse.id} className="db-horse-card">
                                            <div
                                                className="db-horse-img"
                                                style={{ backgroundImage: `url(${horse.images?.[0] || 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop'})` }}
                                            >
                                                <div className="db-badge-row">
                                                    {horse.isVip && <span className="db-tag db-tag-vip">VIP</span>}
                                                    <span className={`db-tag db-tag-${horse.status?.toLowerCase() || 'active'}`}>
                                                        {horse.status || 'Activo'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="db-horse-info">
                                                <div className="db-horse-header">
                                                    <h4>{horse.name}</h4>
                                                    <span className="price">${horse.price?.toLocaleString()}</span>
                                                </div>
                                                <div className="db-horse-meta">
                                                    <span>{horse.age} años</span> • <span>{horse.height} hh</span> • <span>{horse.breed}</span>
                                                </div>
                                                <div className="db-trust-score-mini">
                                                    <div className="db-trust-row">
                                                        <span>Trust Score</span>
                                                        <span>{horse.trustScore || 95}/100</span>
                                                    </div>
                                                    <div className="db-trust-bar">
                                                        <div className="db-trust-fill" style={{ width: `${horse.trustScore || 95}%` }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="db-no-horses">
                                        <span>🐴</span>
                                        <h3>No tienes caballos publicados</h3>
                                        <p>Comienza agregando tu primer caballo al mercado.</p>
                                        <button
                                            className="db-btn-add"
                                            style={{ margin: '1rem auto' }}
                                            onClick={() => navigate('/caballo/nuevo')}
                                        >
                                            Agregar Caballo
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
