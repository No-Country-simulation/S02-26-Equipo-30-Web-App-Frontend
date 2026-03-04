import React, { useEffect, useState } from "react";
import "./HorseDetails.css";
import Btn from "@/shared/common/button/Btn";
import HorseProfile from "./components/horseProfile/HorseProfile";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, Message, MapPin, Calendar, Ruler, Weight, Gauge, Info, Lock } from "@shared/branding/icons";
import { useAuth } from "@shared/context/AuthContext";
import { horseService } from "@features/horse-management/horseService";
import { exploreService } from "@features/explore/exploreService";
import { stripeService } from "@features/stripe/stripeService";
import { favoritesService } from "@features/favorites/favoritesService";

export default function HorseDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [horse, setHorse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [listingId, setListingId] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFavLoading, setIsFavLoading] = useState(false);
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                // Fetch horse data directly using the new endpoint
                const res = await horseService.getHorseById(id);
                const horseData = res.data || res;

                if (horseData) {
                    console.log("=== Horse Data Loaded Successfully ===", horseData);

                    // The API returns listingId directly
                    setListingId(horseData.listingId);

                    // Ownership check using secondary endpoint if authenticated
                    if (isAuthenticated) {
                        try {
                            const myHorses = await horseService.getUserHorses();
                            const ownsIt = myHorses.some(h => h.id === horseData.id || h.id === id);
                            setIsOwner(ownsIt);
                        } catch (err) {
                            console.error("Error checking horse ownership:", err);
                        }
                    }

                    // Map data to ensure backward compatibility with UI if needed
                    // Preference is given to 'name' as per the latest schema
                    const finalHorse = {
                        ...horseData,
                        id: horseData.id || id,
                        name: horseData.name || horseData.horseName,
                        listingId: horseData.listingId
                    };

                    setHorse(finalHorse);
                    setIsFavorite(horseData.isFavorite || false);
                } else {
                    throw new Error("Horse not found");
                }
            } catch (err) {
                console.error("Error fetching horse details:", err);
                setError("No se pudo cargar la información del caballo.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchAllData();
        }
    }, [id]);

    if (loading) {
        return <div className="listing-container loading">Cargando detalles del caballo...</div>;
    }

    if (error || !horse) {
        return (
            <div className="listing-container error">
                <p>{error || "Caballo no encontrado."}</p>
                <Btn onClick={() => navigate("/explorar")}>Volver a explorar</Btn>
            </div>
        );
    }

    // Calcular edad a partir de birthDate
    const calculateAge = (birthDate) => {
        if (!birthDate) return "N/A";
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return `${age} años`;
    };

    const handleInterestClick = async () => {
        try {
            setIsCheckingOut(true);
            // IMPORTANTE: Para Stripe necesitamos el listingId, no el horseId
            const finalId = listingId || horse?.listingId;

            if (!finalId) {
                throw new Error("No se encontró el ID del anuncio para iniciar el proceso de interés.");
            }

            console.log("=== Initiating Checkout with Listing ID:", finalId);
            const response = await stripeService.createCheckoutSession([finalId]);

            if (response && response.url) {
                window.location.href = response.url;
            } else {
                throw new Error("No se recibió una URL de redirección válida.");
            }
        } catch (err) {
            console.error("Error initiating checkout:", err);
            alert(err.message || "Hubo un problema al iniciar el proceso de interés. Por favor, intenta de nuevo.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    const translateSex = (sex) => {
        const mapping = {
            'STALLION': 'Semental',
            'MARE': 'Yegua',
            'GELDING': 'Castrado'
        };
        return mapping[sex?.toUpperCase()] || sex;
    };

    return (
        <div className="listing-container">
            <div className="listing-card">
                <div className="image-section">
                    <div className="badges">
                        {horse.sellerVerified && <span className="badge verified">Vendedor Verificado</span>}
                        <span className="badge score">Puntaje de Confianza: {Math.round(horse.trustScore * 100)}%</span>
                    </div>
                    <img
                        src={horse.imageUrl || `https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop&random=${horse.id}`}
                        alt={horse.horseName || horse.name}
                        className="horse-image"
                    />
                    <button
                        className={`favorite ${isFavorite ? 'active' : ''}`}
                        onClick={async () => {
                            if (!isAuthenticated) {
                                navigate('/login');
                                return;
                            }
                            try {
                                setIsFavLoading(true);
                                await favoritesService.toggleFavorite(id);
                                setIsFavorite(!isFavorite);
                            } catch (err) {
                                console.error("Error toggling favorite:", err);
                            } finally {
                                setIsFavLoading(false);
                            }
                        }}
                        disabled={isFavLoading}
                        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                    >
                        <Heart size={20} fill={isFavorite ? "#ef4444" : "none"} color={isFavorite ? "#ef4444" : "#000"} />
                    </button>
                </div>

                <div className="info-section">
                    <div className="title-header">
                        <h1 className="title">{horse.horseName || horse.name}</h1>
                        <span className={`sex-badge ${horse.sex?.toLowerCase()}`}>{translateSex(horse.sex)}</span>
                    </div>
                    <p className="subtitle">{horse.breed}</p>
                    <h2 className="price">{horse.price ? `$${horse.price.toLocaleString()}` : "Contactar para precio"}</h2>

                    <div className="details-grid">
                        <div className="detail-item">
                            <Calendar size={18} className="icon" />
                            <div>
                                <p className="label">Edad</p>
                                <p>{calculateAge(horse.birthDate)}</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <Ruler size={18} className="icon" />
                            <div>
                                <p className="label">Altura</p>
                                <p>{horse.heightM} m</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <Weight size={18} className="icon" />
                            <div>
                                <p className="label">Peso</p>
                                <p>{horse.weightKg} kg</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <Gauge size={18} className="icon" />
                            <div>
                                <p className="label">Velocidad Máx</p>
                                <p>{horse.maxSpeedKmh} km/h</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <MapPin size={18} className="icon" />
                            <div>
                                <p className="label">Ubicación</p>
                                <p>{horse.location?.city}, {horse.location?.country}</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <Info size={18} className="icon" />
                            <div>
                                <p className="label">País de Origen</p>
                                <p>{horse.birthCountry || horse.location?.country || "N/A"}</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="description">
                        <h3>Descripción y Temperamento</h3>
                        <p>
                            {horse.horseName || horse.name} es un ejemplar de temperamento <strong>{horse.temperament}</strong>.
                            Ideal para <strong>{horse.mainUse}</strong>.
                        </p>

                        {isAuthenticated ? (
                            <div className="extra-stats">
                                <p><strong>Linaje:</strong> {horse.lineage || "No especificado"}</p>
                                <p><strong>Carreras realizadas:</strong> {horse.careerRaces}</p>
                                <p><strong>Días desde última carrera:</strong> {horse.daysSinceLastRace}</p>
                            </div>
                        ) : (
                            <div className="locked-inline-info">
                                <Lock size={14} />
                                <span>Inicia sesión para ver linaje y estadísticas de carrera</span>
                            </div>
                        )}
                    </div>

                    <div className="vet-summary">
                        <h3>Estado Veterinario</h3>
                        {isAuthenticated ? (
                            <div className="vet-stats">
                                <p><span>Exámenes totales:</span> {horse.vetTotalExams}</p>
                                <p><span>Problemas mayores:</span> {horse.vetMajorIssues}</p>
                                <p><span>Estado de puntaje:</span> <span className={`status-${horse.trustScoreStatus?.toLowerCase()}`}>{horse.trustScoreStatus}</span></p>
                            </div>
                        ) : (
                            <div className="locked-inline-info">
                                <Lock size={14} />
                                <span>Información veterinaria detallada protegida</span>
                            </div>
                        )}
                    </div>

                    <div className="listing-actions">
                        {(isAuthenticated && (isOwner || (user?.id && (horse.ownerId === user.id || horse.sellerId === user.id)))) ? (
                            <Btn
                                className="edit-btn"
                                onClick={() => navigate(`/caballo/editar/${horse.id}`)}
                                style={{ width: '100%', background: '#C9A24D', color: '#fff' }}
                            >
                                <Info size={18} />
                                Editar mi publicación
                            </Btn>
                        ) : (
                            <>
                                <Btn
                                    className="chat-btn"
                                    onClick={() => navigate(`/chat?listingId=${horse.listingId}`)}
                                >
                                    <Message size={18} />
                                    Chatear con el vendedor
                                </Btn>
                                <Btn
                                    className="cta"
                                    onClick={handleInterestClick}
                                    disabled={isCheckingOut}
                                >
                                    {isCheckingOut ? "Procesando..." : "Expresar Interés de Compra"}
                                </Btn>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <HorseProfile horse={horse} />
        </div>
    );
}
