import React, { useMemo, useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Search, Shield, Award, Heart, User, ArrowRight } from "@shared/branding/icons";
import Badge from "@components/badge/Badge";
import FeaturedHorses from './components/FeaturedHorses/FeaturedHorses'
import { exploreService } from "@features/explore/exploreService";

/** Inline small icons to avoid missing exports */
const ChevronRight = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

export default function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [discipline, setDiscipline] = useState("all");

    useEffect(() => {
        exploreService.getListings()
            .then(res => console.log("=== GET /api/v1/listings/explore RES ===", res))
            .catch(err => console.error("Error fetching listings (explore) on Home:", err));
    }, []);

    const disciplines = useMemo(
        () => [
            { value: "all", label: "Todas las Disciplinas" },
            { value: "Show Jumping", label: "Salto" },
            { value: "Dressage", label: "Doma Clásica" },
            { value: "Eventing", label: "Concurso Completo" },
            { value: "Western", label: "Western" },
            { value: "Trail", label: "Paseo y Recreo" },
        ],
        []
    );

    const featured = useMemo(
        () => [
            {
                id: 1,
                name: "Aurum",
                subtitle: "Salto • 8 años • 1.68m",
                img: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=1200&q=80",
            },
            {
                id: 2,
                name: "Luna",
                subtitle: "Doma • 7 años • 1.64m",
                img: "https://images.unsplash.com/photo-1496436818536-e239445d3327?auto=format&fit=crop&w=1200&q=80",
            },
            {
                id: 3,
                name: "Nómada",
                subtitle: "Trail • 10 años • 1.60m",
                img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
            },
            {
                id: 4,
                name: "Siroco",
                subtitle: "Completo • 9 años • 1.66m",
                img: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1200&q=80",
            },
            {
                id: 5,
                name: "Cobre",
                subtitle: "Western • 6 años • 1.58m",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
            },
            {
                id: 6,
                name: "Bruma",
                subtitle: "Salto • 5 años • 1.70m",
                img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=80",
            },
        ],
        []
    );

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchTerm.trim()) params.set("search", searchTerm.trim());
        if (discipline !== "all") params.set("discipline", discipline);
        navigate(`/explorar?${params.toString()}`);
    };


    return (
        <main className="home">
            {/* HERO */}
            <section className="home-hero">
                <div className="home-hero__bg">
                    <img
                        className="home-hero__bgImg"
                        src="https://images.unsplash.com/photo-1430825803925-53e62bb14db1?auto=format&fit=crop&w=1600&q=80"
                        alt="Caballo corriendo"
                        loading="lazy"
                    />
                    <div className="home-hero__bgOverlay" />
                    <div className="home-hero__glow home-hero__glow--gold" />
                    <div className="home-hero__glow home-hero__glow--teal" />
                </div>

                <div className="home-container home-hero__inner">
                    <div className="home-hero__grid">
                        {/* LEFT */}
                        <div className="home-hero__copy">
                            <div className="home-hero__badge">
                                <Badge className="home-hero__badgeDot"> Marketplace #1 de Caballos de Alta Confianza </Badge>
                            </div>

                            <h1 className="home-hero__title">
                                Tu Próximo
                                <span>Campeón</span>
                                Te Espera
                            </h1>

                            <p className="home-hero__subtitle">
                                Caballos con información clara, verificación veterinaria y soporte durante todo el proceso.
                            </p>

                            <div className="home-hero__actions">
                                <Link to="/explorar" className="home-btn home-btn--gold">
                                    Explorar Caballos <ArrowRight size={18} />
                                </Link>

                                <Link to="/registro" className="home-btn home-btn--outlineLight">
                                    Registrarme <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT (SEARCH CARD) */}
                        <div className="home-hero__card">
                            <div className="home-searchCard">
                                <h3 className="home-searchCard__title">Encuentra tu Compañero Ideal</h3>

                                <div className="home-searchCard__fields">
                                    <div className="home-field">
                                        <span className="home-field__icon">
                                            <Search size={18} />
                                        </span>
                                        <input
                                            className="home-input"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                            placeholder="Buscar por raza, disciplina..."
                                            type="text"
                                        />
                                    </div>

                                    <div className="home-field home-field--select">
                                        <select
                                            className="home-select"
                                            value={discipline}
                                            onChange={(e) => setDiscipline(e.target.value)}
                                        >
                                            <span className="home-select__arrow">▾</span>
                                            {disciplines.map((d) => (
                                                <option key={d.value} value={d.value}>
                                                    {d.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button className="home-btnSolid" onClick={handleSearch} type="button">
                                        <Search size={18} /> Buscar Ahora
                                    </button>
                                </div>

                                <div className="home-searchCard__quick">
                                    <p className="home-searchCard__quickLabel">BÚSQUEDAS POPULARES:</p>
                                    <div className="home-chips">
                                        <button type="button" className="home-chip" onClick={() => setDiscipline("Show Jumping")}>
                                            Salto
                                        </button>
                                        <button type="button" className="home-chip" onClick={() => setDiscipline("Dressage")}>
                                            Doma
                                        </button>
                                        <button type="button" className="home-chip" onClick={() => setDiscipline("Trail")}>
                                            Paseo
                                        </button>
                                        <button type="button" className="home-chip" onClick={() => setDiscipline("Western")}>
                                            Western
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-hero__fade" />
                </div>
            </section>

            {/* METRICS */}
            <section className="home-metrics">
                <div className="home-container">
                    <div className="home-metrics__row">
                        <div className="home-metric">
                            <div className="home-metric__val">2.4k+</div>
                            <div className="home-metric__label">Caballos verificados</div>
                            <div className="home-metric__sub">Revisados por expertos</div>
                        </div>

                        <div className="home-metric">
                            <div className="home-metric__val">850+</div>
                            <div className="home-metric__label">Vendedores auditados</div>
                            <div className="home-metric__sub">Perfiles validados</div>
                        </div>

                        <div className="home-metric">
                            <div className="home-metric__val">98.5%</div>
                            <div className="home-metric__label">Satisfacción</div>
                            <div className="home-metric__sub">Basado en reseñas</div>
                        </div>

                        <div className="home-metric home-metric--accent">
                            <div className="home-metric__val">30</div>
                            <div className="home-metric__label">Garantía</div>
                            <div className="home-metric__sub">Devolución sin preguntas</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DISCIPLINAS (BENTO) */}
            <section className="home-section">
                <div className="home-container">
                    <div className="home-head">
                        <p className="home-kicker">DISCIPLINAS</p>
                        <h2 className="home-h2">
                            Encuentra tu <span>Especialidad</span>
                        </h2>
                        <p className="home-sub">
                            Desde salto olímpico hasta paseos tranquilos, hay un compañero perfecto para cada jinete.
                        </p>
                    </div>

                    <div className="home-bento">
                        <Link to="/explorar?discipline=Show%20Jumping" className="home-bento__a home-bento__big">
                            <img
                                src="https://images.unsplash.com/photo-1568910866193-8240a89e9648?auto=format&fit=crop&w=1600&q=80"
                                alt="Salto"
                                loading="lazy"
                            />
                            <div className="home-bento__overlay" />
                            <div className="home-bento__content">
                                <span className="home-tag">Más Popular</span>
                                <h3>Salto</h3>
                                <p>Competición y alto rendimiento</p>
                                <span className="home-bento__more">
                                    Ver más <ChevronRight />
                                </span>
                            </div>
                        </Link>

                        <Link to="/explorar?discipline=Dressage" className="home-bento__a home-bento__wide">
                            <img
                                src="https://images.unsplash.com/photo-1542479860-b9af47a7c12e?auto=format&fit=crop&w=1600&q=80"
                                alt="Doma"
                                loading="lazy"
                            />
                            <div className="home-bento__overlay" />
                            <div className="home-bento__content">
                                <h3>Doma Clásica</h3>
                                <p>Elegancia y precisión</p>
                            </div>
                        </Link>

                        <Link to="/explorar?discipline=Western" className="home-bento__a">
                            <img
                                src="https://images.unsplash.com/photo-1657180817829-7bdbfbf8112f?auto=format&fit=crop&w=1200&q=80"
                                alt="Western"
                                loading="lazy"
                            />
                            <div className="home-bento__overlay" />
                            <div className="home-bento__content">
                                <h3>Western</h3>
                                <p>Tradición</p>
                            </div>
                        </Link>

                        <Link to="/explorar?discipline=Eventing" className="home-bento__a">
                            <img
                                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=1200&q=80"
                                alt="Completo"
                                loading="lazy"
                            />
                            <div className="home-bento__overlay" />
                            <div className="home-bento__content">
                                <h3>Completo</h3>
                                <p>Versatilidad</p>
                            </div>
                        </Link>

                        <Link to="/explorar?discipline=Trail" className="home-bento__a home-bento__wide2">
                            <img
                                src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1600&q=80"
                                alt="Paseo"
                                loading="lazy"
                            />
                            <div className="home-bento__overlay" />
                            <div className="home-bento__content">
                                <h3>Paseo y Recreo</h3>
                                <p>Compañeros tranquilos para toda la familia</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* DESTACADOS */}
            <section className="home-section home-section--alt">
                <div className="home-container">
                    <FeaturedHorses />
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="home-cta">
                <div className="home-cta__glow home-cta__glow--gold" />
                <div className="home-cta__glow home-cta__glow--teal" />

                <div className="home-container home-cta__inner">
                    <h2 className="home-cta__title">
                        Comienza tu Historia <span>de Éxito Ecuestre</span>
                    </h2>
                    <p className="home-cta__text">
                        Únete a miles de jinetes que ya encontraron su compañero ideal con total confianza.
                    </p>

                    <div className="home-cta__actions">
                        <Link to="/explorar" className="home-btn home-btn--gold">
                            Explorar Caballos <Search size={18} />
                        </Link>
                        <Link to="/contacto" className="home-btn home-btn--outlineLight">
                            Contáctanos <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="home-cta__badges">
                        <div className="home-ctaBadge">
                            <Shield size={22} />
                            <span>Verificación<br />Veterinaria</span>
                        </div>
                        <div className="home-ctaBadge">
                            <Award size={22} />
                            <span>Certificación<br />y Transparencia</span>
                        </div>
                        <div className="home-ctaBadge">
                            <Heart size={22} />
                            <span>Garantía 30 Días<br />Sin Preguntas</span>
                        </div>
                        <div className="home-ctaBadge">
                            <User size={22} />
                            <span>Soporte 24/7<br />Especializado</span>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}