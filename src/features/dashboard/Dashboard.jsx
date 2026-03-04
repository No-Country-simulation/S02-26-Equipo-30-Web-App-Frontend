/* Dashboard.jsx */
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Reutilizable
import HorseCard from "@/shared/common/cards/HorseCard"; // <-- si te falla, prueba: "@shared/common/cards/HorseCard"

// Iconos (los tuyos)
import {
  Award,
  Search,
  ArrowRight,
  Info,
  Shield,
  Star,
  Dollar,
} from "@shared/branding/icons";

// Servicios (si luego conectas API real)
import horseService from "../horse-management/horseService";

/* --- Iconos inline (como tenías) --- */
const PanelIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const HorseIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
    <path d="M12 12L19 5"></path>
  </svg>
);

const EyeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const MessageIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MOCK_SELLER = {
  businessName: "Heritage Equestrian",
  sellerScore: 98,
};

const MOCK_METRICS = {
  totalRevenue: 185000,
  revenueGrowth: 23.5,
  activeListings: 3,
  totalListings: 12,
  totalViews: 1247,
  viewsGrowth: 12,
  totalInquiries: 38,
  inquiriesGrowth: 15,
};

const MOCK_ACTIVITY = [
  {
    id: 1,
    type: "inquiry",
    title: "Nueva consulta de María González",
    subtitle: "Interesada en Thunder Strike",
    time: "2 horas",
    variant: "msg",
  },
  {
    id: 2,
    type: "view",
    title: "15 nuevas vistas",
    subtitle: "Midnight Glory",
    time: "3 horas",
    variant: "view",
  },
  {
    id: 3,
    type: "offer",
    title: "Oferta recibida: $48,000",
    subtitle: "Storm Chaser",
    time: "5 horas",
    variant: "offer",
  },
  {
    id: 4,
    type: "inquiry",
    title: "Nueva consulta de Carlos Ramírez",
    subtitle: "Interesado en Thunder Strike",
    time: "1 día",
    variant: "msg",
  },
];

// Caballos mock para “Mis Caballos” (sustituye por API cuando quieras)
const MOCK_HORSES = [
  {
    id: "1",
    name: "Golden Promise",
    breed: "Selle Français",
    price: 60249,
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop",
    sellerScore: 94,
    age: "8 years",
    height: "18.1 hh",
    discipline: "Barrel Racing",
    location: "Wellington, FL",
  },
  {
    id: "2",
    name: "Royal Symphony",
    breed: "Friesian",
    price: 58020,
    image:
      "https://images.unsplash.com/photo-1534073733318-7f287900b135?q=80&w=1200&auto=format&fit=crop",
    sellerScore: 100,
    age: "6 years",
    height: "16.1 hh",
    discipline: "Western Performance",
    location: "Scottsdale, AZ",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ cuando lo conectes a tu API, cambias este array por tu estado
  const sellerHorses = useMemo(() => MOCK_HORSES, []);

  const filteredHorses = useMemo(() => {
    if (!searchQuery) return sellerHorses;
    const q = searchQuery.toLowerCase();
    return sellerHorses.filter(
      (h) =>
        h.name?.toLowerCase().includes(q) || h.breed?.toLowerCase().includes(q)
    );
  }, [sellerHorses, searchQuery]);

  return (
    <main className="db">
      <div className="db-container">
        {/* HERO PANEL */}
        <header className="db-panel-hero">
          <div className="db-hero-top">
            <div className="db-user-info">
              <div className="db-avatar-circle" aria-hidden="true">
                <PanelIcon size={32} />
              </div>

              <div className="db-welcome">
                <h1 className="db-welcome__title">Heritage Equestrian</h1>

                <div className="db-trust-score">
                  <span className="db-trust-pill">
                    <Shield size={14} />
                    Trust Score: {MOCK_SELLER.sellerScore}%
                  </span>
                  <span className="db-trust-badge">Excelente</span>
                </div>
              </div>
            </div>

            {/* ✅ Botones a la derecha (como Figma) */}
            <div className="db-hero-actions">
              <Link to="/chat" className="db-hero-btn db-hero-btn--gold">
                Mis Mensajes
              </Link>

              <button
                className="db-hero-btn db-hero-btn--gold"
                onClick={() => navigate("/caballo/nuevo")}
                type="button"
              >
                <span className="db-plus">+</span>
                Agregar Caballo
              </button>
            </div>
          </div>

          <div className="db-hero-stats">
            <div className="db-hstat">
              <div className="db-hstat__header">
                <span>Ingresos</span>
                <ArrowRight
                  size={14}
                  style={{ transform: "rotate(-45deg)", opacity: 0.6 }}
                />
              </div>
              <div className="db-hstat__value">
                ${Math.round(MOCK_METRICS.totalRevenue / 1000)}k
              </div>
              <div className="db-hstat__meta">
                <span className="db-hstat__trend">
                  +{MOCK_METRICS.revenueGrowth}%
                </span>{" "}
                este mes
              </div>
            </div>

            <div className="db-hstat">
              <div className="db-hstat__header">
                <span>Activos</span>
                <HorseIcon size={14} style={{ opacity: 0.7 }} />
              </div>
              <div className="db-hstat__value">{MOCK_METRICS.activeListings}</div>
              <div className="db-hstat__meta">
                de {MOCK_METRICS.totalListings} totales
              </div>
            </div>

            <div className="db-hstat">
              <div className="db-hstat__header">
                <span>Vistas</span>
                <EyeIcon size={14} style={{ opacity: 0.7 }} />
              </div>
              <div className="db-hstat__value">{MOCK_METRICS.totalViews}</div>
              <div className="db-hstat__meta">
                <span className="db-hstat__trend">
                  +{MOCK_METRICS.viewsGrowth}%
                </span>{" "}
                semana
              </div>
            </div>

            <div className="db-hstat">
              <div className="db-hstat__header">
                <span>Consultas</span>
                <MessageIcon size={14} style={{ opacity: 0.7 }} />
              </div>
              <div className="db-hstat__value">{MOCK_METRICS.totalInquiries}</div>
              <div className="db-hstat__meta">
                <span className="db-hstat__trend">
                  +{MOCK_METRICS.inquiriesGrowth}%
                </span>{" "}
                semana
              </div>
            </div>
          </div>
        </header>

        {/* TABS */}
        <nav className="db-tabs-wrap">
          <div className="db-tabs">
            <button
              type="button"
              className={`db-tab ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <PanelIcon size={16} />
              Dashboard
            </button>

            <button
              type="button"
              className={`db-tab ${activeTab === "my-horses" ? "active" : ""}`}
              onClick={() => setActiveTab("my-horses")}
            >
              <span className="db-tab-icon" aria-hidden="true">
                <PanelIcon size={16} />
              </span>
              Mis Caballos ({sellerHorses.length})
            </button>
          </div>
        </nav>

        {/* CONTENIDO */}
        {activeTab === "dashboard" ? (
          <div className="db-main-grid">
            {/* LEFT */}
            <section className="db-stats-section">
              <div className="db-card db-summary-card">
                <div className="db-summary-left">
                  <p className="db-summary-label">Ingresos Totales</p>
                  <h2 className="db-summary-val">
                    ${MOCK_METRICS.totalRevenue.toLocaleString()}
                  </h2>
                  <span className="db-summary-trend">
                    +{MOCK_METRICS.revenueGrowth}% este mes
                  </span>

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

                <div className="db-sicon-box" aria-hidden="true">
                  <Dollar size={32} />
                </div>
              </div>

              <div className="db-card db-activity-card">
                <div className="db-card-header">
                  <div className="db-header-icon" aria-hidden="true">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="db-card-title">Actividad Reciente</h3>
                    <p className="db-card-sub">
                      Últimas interacciones con tus listados
                    </p>
                  </div>
                </div>

                <div className="db-activity-list">
                  {MOCK_ACTIVITY.map((a) => (
                    <div className="db-activity-item" key={a.id}>
                      <div className="db-act-content">
                        <div className={`db-act-icon ${a.variant}`} aria-hidden="true">
                          {a.variant === "msg" && <MessageIcon size={18} />}
                          {a.variant === "view" && <EyeIcon size={18} />}
                          {a.variant === "offer" && <Dollar size={18} />}
                        </div>
                        <div>
                          <p className="db-act-title">{a.title}</p>
                          <p className="db-act-sub">{a.subtitle}</p>
                        </div>
                      </div>
                      <span className="db-act-time">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT */}
            <aside className="db-sidebar">
              <div className="db-side-card">
                <div className="db-side-header">Estado de Listados</div>
                <div className="db-side-list">
                  <div className="db-stat-row">
                    <div className="db-stat-label">
                      <div className="db-stat-icon active" aria-hidden="true">
                        <Shield size={14} />
                      </div>
                      Activos
                    </div>
                    <span className="db-stat-val active">
                      {MOCK_METRICS.activeListings}
                    </span>
                  </div>

                  <div className="db-stat-row">
                    <div className="db-stat-label">
                      <div className="db-stat-icon review" aria-hidden="true">
                        <Info size={14} />
                      </div>
                      En Revisión
                    </div>
                    <span className="db-stat-val review">0</span>
                  </div>

                  <div className="db-stat-row">
                    <div className="db-stat-label">
                      <div className="db-stat-icon sold" aria-hidden="true">
                        <Star size={14} />
                      </div>
                      Vendidos
                    </div>
                    <span className="db-stat-val sold">2</span>
                  </div>
                </div>
              </div>

              <div className="db-side-card db-tips-card">
                <div className="db-side-header">Mejora tus Ventas</div>

                <div className="db-tip-item">
                  <div className="db-tip-icon" aria-hidden="true">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="db-tip-text">Videos de rendimiento</p>
                    <p className="db-tip-sub">Aumenta las consultas</p>
                  </div>
                </div>

                <div className="db-tip-item">
                  <div className="db-tip-icon" aria-hidden="true">
                    <Shield size={16} />
                  </div>
                  <div>
                    <p className="db-tip-text">Documentación completa</p>
                    <p className="db-tip-sub">Genera más confianza</p>
                  </div>
                </div>

                <div className="db-tip-item">
                  <div className="db-tip-icon" aria-hidden="true">
                    <ArrowRight size={16} />
                  </div>
                  <div>
                    <p className="db-tip-text">Respuesta rápida</p>
                    <p className="db-tip-sub">Mejora tu conversión</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* MIS CABALLOS */
          <section className="db-listings">
            <div className="db-filters-card">
              <div className="db-filters-head">
                <div className="db-filters-icon" aria-hidden="true">
                  <Search size={18} />
                </div>
                <div>
                  <h3 className="db-filters-title">Filtros y Búsqueda</h3>
                  <p className="db-filters-sub">Encuentra y gestiona tus listados</p>
                </div>
              </div>

              <div className="db-filters-grid">
                <div className="db-field">
                  <label>Buscar</label>
                  <div className="db-input-wrap">
                    <span className="db-input-icon" aria-hidden="true">
                      <Search size={16} />
                    </span>
                    <input
                      className="db-input"
                      placeholder="Nombre o raza..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="db-field db-field--actions">
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    className="db-btn-outline"
                    onClick={() => setSearchQuery("")}
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>

              <div className="db-results-row">
                <span>
                  Mostrando{" "}
                  <b>{filteredHorses.length}</b> de {sellerHorses.length} caballos
                </span>
                <span className="db-results-badge">
                  {filteredHorses.length} resultados
                </span>
              </div>
            </div>

            {sellerHorses.length === 0 ? (
              <div className="db-empty">
                <div className="db-empty-card">
                  <h3>Aún no tienes caballos publicados</h3>
                  <p>
                    Crea tu primer listado para empezar a recibir vistas y consultas.
                  </p>
                  <button
                    className="db-hero-btn db-hero-btn--gold"
                    onClick={() => navigate("/caballo/nuevo")}
                    type="button"
                  >
                    <span className="db-plus">+</span>
                    Agregar Caballo
                  </button>
                </div>
              </div>
            ) : filteredHorses.length > 0 ? (
              <div className="db-horses-grid">
                {filteredHorses.map((horse) => (
                  <div key={horse.id} className="db-horse-item">
                    <HorseCard horse={horse} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="db-empty">
                <div className="db-empty-card">
                  <h3>No se encontraron resultados</h3>
                  <p>Prueba con otro texto de búsqueda.</p>
                  <button
                    type="button"
                    className="db-btn-outline"
                    onClick={() => setSearchQuery("")}
                  >
                    Limpiar búsqueda
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}