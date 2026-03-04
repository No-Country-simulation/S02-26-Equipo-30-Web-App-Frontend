import React, { useMemo, useState, useEffect } from "react";
import "./favorites.css";
import { Link } from "react-router-dom";
import HorseCard from "@/shared/common/cards/HorseCard";
import { useAuth } from "@shared/context/AuthContext";
import { favoritesService } from "./favoritesService";

const MOCK_USER = {
    name: "Alexandra Bennett",
    email: "alexandra@email.com",
    memberSince: "Enero 2024",
};

// Mock horses (si luego lo conectas a tu data real, sustituyes esto)
const MOCK_HORSES = [
    {
        id: "1",
        name: "Golden Promise",
        breed: "Selle Français",
        price: 60249,
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1534073733318-7f287900b135?q=80&w=2072&auto=format&fit=crop",
        sellerScore: 100,
        age: "6 years",
        height: "16.1 hh",
        discipline: "Western Performance",
        location: "Scottsdale, AZ",
    },
    {
        id: "4",
        name: "Silver Cloud",
        breed: "Holsteiner",
        price: 75486,
        image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1974&auto=format&fit=crop",
        sellerScore: 93,
        age: "8 years",
        height: "17.2 hh",
        discipline: "Cutting",
        location: "Nashville, TN",
    },
    {
        id: "5",
        name: "Midnight Star",
        breed: "Hanoverian",
        price: 66022,
        image: "https://images.unsplash.com/photo-1528659550346-407399895c2f?q=80&w=2028&auto=format&fit=crop",
        sellerScore: 95,
        age: "8 years",
        height: "15.1 hh",
        discipline: "Hunter",
        location: "Ocala, FL",
    },
];

const MOCK_RECENT = [
    {
        id: "10",
        name: "Eclipse",
        breed: "Belgian Warmblood",
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "11",
        name: "Thunder Strike",
        breed: "Hanoverian",
        image: "https://images.unsplash.com/photo-1534073733318-7f287900b135?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "12",
        name: "Diamond Belle",
        breed: "Holsteiner",
        image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=600&auto=format&fit=crop",
    },
];

const MOCK_RECO = [
    {
        id: "20",
        name: "Copper Sunset",
        breed: "Quarter Horse",
        price: 74000,
        image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?q=80&w=400&auto=format&fit=crop",
        location: "Nashville, TN",
    },
    {
        id: "21",
        name: "Eclipse",
        breed: "Warmblood",
        price: 62000,
        image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=400&auto=format&fit=crop",
        location: "Scottsdale, AZ",
    },
];

export default function Favorites() {
    const { user, isAuthenticated } = useAuth();
    const [savedHorses, setSavedHorses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!isAuthenticated) {
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const data = await favoritesService.getFavorites();
                setSavedHorses(data || []);
            } catch (err) {
                console.error("Error fetching favorites:", err);
                setError("No se pudieron cargar tus favoritos.");
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [isAuthenticated]);


    const avgTrust = useMemo(() => {
        if (!savedHorses.length) return 0;
        const total = savedHorses.reduce((sum, h) => sum + Number(h.trustScore || 0), 0);
        return Math.round(total / savedHorses.length);
    }, [savedHorses]);

    return (
        <main className="fav">
            <div className="fav__wrap">
                {/* Hero */}
                <section className="fav-hero">
                    <div className="fav-hero__glow fav-hero__glow--gold" />
                    <div className="fav-hero__glow fav-hero__glow--teal" />

                    <div className="fav-hero__top">
                        <div className="fav-hero__left">
                            <div>
                                <h1 className="fav-hero__title">Bienvenido, {user?.fullName || user?.name || "Usuario"}</h1>
                                <p className="fav-hero__subtitle">Tu colección ecuestre personalizada</p>
                            </div>
                        </div>

                        <div className="fav-hero__actions">
                            <Link to="/chat" className="fav-btn fav-btn--gold fav-btn--messages">
                                Ver mensajes
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="fav-stats">
                        <div className="fav-stat">
                            <p className="fav-stat__label">Guardados</p>
                            <p className="fav-stat__value">{savedHorses.length}</p>
                        </div>
                        <div className="fav-stat">
                            <p className="fav-stat__label">Trust Score</p>
                            <p className="fav-stat__value">{avgTrust}</p>
                        </div>
                    </div>
                </section>

                {/* Main layout */}
                <section className="fav-layout">
                    {/* Left / Main */}
                    <div className="fav-main">
                        {/* Saved horses */}
                        <div className="fav-card">
                            <div className="fav-card__head">
                                <div>
                                    <h2 className="fav-card__title">Mis Caballos Guardados</h2>
                                    <p className="fav-card__desc">Tu selección personalizada</p>
                                </div>

                                {savedHorses.length > 0 && (
                                    <span className="fav-badge">{savedHorses.length} Total</span>
                                )}
                            </div>

                            <div className="fav-card__body">
                                {loading ? (
                                    <div className="fav-empty">
                                        <p>Cargando tus favoritos...</p>
                                    </div>
                                ) : savedHorses.length > 0 ? (
                                    <div className="fav-horsesGrid">
                                        {savedHorses.map((horse) => (
                                            <HorseCard key={horse.id} horse={horse} isFavorite={true} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="fav-empty">
                                        <div className="fav-empty__icon" aria-hidden="true" />
                                        <h3>No tienes caballos guardados</h3>
                                        <p>
                                            Explora nuestro catálogo y guarda los caballos que te interesen para
                                            revisar más tarde.
                                        </p>
                                        <Link to="/browse" className="fav-btn fav-btn--gold">
                                            Explorar Caballos
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Recently viewed */}
                        <div className="fav-card">
                            <div className="fav-card__head">
                                <div>
                                    <h2 className="fav-card__title">Vistos Recientemente</h2>
                                    <p className="fav-card__desc">Caballos que has explorado</p>
                                </div>
                            </div>

                            <div className="fav-card__body">
                                <div className="fav-recentGrid">
                                    {MOCK_RECENT.map((horse) => (
                                        <Link key={horse.id} to={`/horse/${horse.id}`} className="fav-recent">
                                            <img src={horse.image} alt={horse.name} />
                                            <div className="fav-recent__overlay">
                                                <p className="fav-recent__name">{horse.name}</p>
                                                <p className="fav-recent__breed">{horse.breed}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right / Sidebar */}
                    <aside className="fav-side">
                        {/* Quick actions */}
                        <div className="fav-widget">
                            <h3 className="fav-widget__title">Acciones Rápidas</h3>
                            <div className="fav-actions">
                                <Link to="/browse" className="fav-btn fav-btn--gold">
                                    Explorar Caballos
                                </Link>
                                <Link to="/perfil" className="fav-btn fav-btn--outline">
                                    Ver Perfil
                                </Link>
                                <Link to="/perfil/editar" className="fav-btn fav-btn--outline">
                                    Editar Perfil
                                </Link>
                            </div>
                        </div>

                        {/* Account status */}
                        <div className="fav-widget fav-widget--soft">
                            <h3 className="fav-widget__title">Estado de la Cuenta</h3>
                            <div className="fav-status">
                                <div className="fav-status__item">
                                    <div>
                                        <p className="fav-status__label">Email</p>
                                        <p className="fav-status__value">{user?.email || "No disponible"}</p>
                                    </div>
                                </div>

                                <div className="fav-status__item">
                                    <div>
                                        <p className="fav-status__label">Rol</p>
                                        <p className="fav-status__value">{user?.role || "Comprador"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="fav-widget">
                            <h3 className="fav-widget__title">Recomendado para Ti</h3>

                            <div className="fav-recoList">
                                {MOCK_RECO.map((horse) => (
                                    <Link key={horse.id} to={`/horse/${horse.id}`} className="fav-reco">
                                        <img src={horse.image} alt={horse.name} />
                                        <div className="fav-reco__info">
                                            <p className="fav-reco__name">{horse.name}</p>
                                            <p className="fav-reco__sub">
                                                ${(horse.price / 1000).toFixed(0)}k • {horse.location.split(",")[0]}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <Link to="/browse" className="fav-btn fav-btn--outline fav-btn--full">
                                Ver Más Recomendaciones
                            </Link>
                        </div>

                        {/* Notifications */}
                        <div className="fav-widget">
                            <h3 className="fav-widget__title">Notificaciones</h3>
                            <div className="fav-note">
                                <p className="fav-note__title">Nuevos caballos disponibles</p>
                                <p className="fav-note__text">
                                    3 caballos que coinciden con tus criterios fueron agregados hoy
                                </p>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}