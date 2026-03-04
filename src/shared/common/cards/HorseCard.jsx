import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@shared/context/AuthContext";
import { MoreVertical, Eye, Edit, Trash, MapPin, Award, Crown } from "@shared/branding/icons";
import { getHorsePlaceholder } from "@/shared/utils/placeholders";
import "./HorseCard.css";

export default function HorseCard(props) {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    // Soporta el nuevo esquema: { id, price, isVip, horse: { ... } }
    // O el antiguo por compatibilidad: { id, price, name, etc }
    const listing = props;
    const horseData = props.horse ?? props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);


    // Cálculo de edad
    const calculateAge = (birthDate) => {
        if (!birthDate || birthDate === "string") return "";
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        if (age < 0) return "";
        return `${age} años`;
    };

    // Mapeo de campos del objeto Horse (desde /api/v1/listings/explore o favoritos)
    const {
        name = horseData.horseName || horseData.name || "Caballo en Venta",
        image = horseData.coverImageUrl || horseData.image || null,
        breed = horseData.breed || "",
        birthDate = horseData.birthDate || "",
        heightM = horseData.heightM || 0,
        mainUse = horseData.discipline || horseData.mainUse || "",
        tags = horseData.tags || [],
        trustScore = horseData.trustScore || 50,
        ageYears = horseData.ageYears || "",
    } = horseData;

    // Campos del Listing / Horse
    // Priorizamos el ID del caballo (UUID) si está disponible en horseData o props
    const id = horseData.id || horseData.horseId || props.horseId || props.listingId || props.id || "";
    const listingId = props.listingId || props.id || "";

    // Extraemos precio y flags de horseData o props
    const price = horseData.price || props.price || "Consultar";
    const isVip = horseData.isVip || horseData.vip || props.isVip || props.vip || false;
    const isFeatured = horseData.isFeatured || props.isFeatured || false;

    useEffect(() => {
        if (!id) {
            console.warn("HorseCard: No ID found for listing:", props);
        }
    }, [id, props]);

    const displayImage = image && image !== "string" ? image : getHorsePlaceholder(id);
    const age = ageYears ? `${ageYears} años` : calculateAge(birthDate);
    const height = heightM ? `${heightM}m` : "";
    const discipline = mainUse;

    // Ubicación
    const displayLocation = props.locationLabel || "Ubicación no disponible";

    // 1) Si viene tags, úsalo. Si no, construye tags desde age/height/discipline
    const pills =
        Array.isArray(tags) && tags.length > 0
            ? tags
            : [age, height, discipline].filter(Boolean);

    const safeTrust = Math.round(Number(trustScore) > 1 ? Number(trustScore) : (Number(trustScore) * 100));
    const normalizedTrust = Math.max(0, Math.min(100, safeTrust));

    const getTrustMeta = (score) => {
        if (score >= 90) return { level: "excellent", label: "Excelente" };
        if (score >= 75) return { level: "good", label: "Muy bueno" };
        if (score >= 55) return { level: "fair", label: "Bueno" };
        return { level: "poor", label: "Mejorable" };
    };

    const trust = getTrustMeta(normalizedTrust);

    return (
        <article className="horse-card">
            <div className="horse-card__media">
                <img
                    className="horse-card__img"
                    src={displayImage}
                    alt={name}
                    onClick={() => navigate(`/detalle/${id}`)}
                    style={{ cursor: 'pointer' }}
                />

                {(isAuthenticated && user?.id && (
                    (horseData.ownerId === user.id && horseData.ownerId !== undefined) ||
                    (horseData.sellerId === user.id && horseData.sellerId !== undefined) ||
                    (props.sellerId === user.id && props.sellerId !== undefined) ||
                    (props.ownerId === user.id && props.ownerId !== undefined)
                )) && (
                        <div className="horse-card__actions-container" ref={menuRef}>
                            <button
                                className={`horse-card__action-btn ${isMenuOpen ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Acciones"
                            >
                                <MoreVertical size={20} />
                            </button>

                            {isMenuOpen && (
                                <div className="horse-card__dropdown">
                                    <button
                                        className="dropdown-item"
                                        onClick={() => navigate(`/detalle/${id}`)}
                                    >
                                        <Eye size={18} />
                                        <span>Ver</span>
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => navigate(`/caballo/editar/${id}`)}
                                    >
                                        <Edit size={18} />
                                        <span>Editar</span>
                                    </button>
                                    <button className="dropdown-item delete">
                                        <Trash size={18} />
                                        <span>Eliminar</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                {(isVip || isFeatured) && (
                    <div className="horse-card__badges">
                        {isVip && (
                            <span>
                            </span>
                        )}
                        {isFeatured && (
                            <span className="badge badge--featured">Destacado</span>
                        )}
                    </div>
                )}

                <button className="horse-card__play" type="button" aria-label="Play video">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>

            <div className="horse-card__body">
                <div className="horse-card__top">
                    <div>
                        <h3 className="horse-card__title">{name}</h3>
                        {breed && <p className="horse-card__breed">{breed}</p>}
                    </div>

                    <div className="horse-card__priceWrap">
                        {price && (
                            <span className="horse-card__price">${price}</span>
                        )}
                        {id !== "" && <span className="horse-card__id">{id}</span>}
                    </div>
                </div>

                {pills.length > 0 && (
                    <div className="horse-card__meta">
                        {pills.map((t, i) => (
                            <span key={`${id}-${i}`} className="horse-card__pill">
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {displayLocation && (
                    <p className="horse-card__location">
                        <MapPin size={14} className="location-icon" />
                        {displayLocation}
                    </p>
                )}

                <hr className="horse-card__divider" />

                <div className="horse-card__trustRow">
                    <div className="horse-card__trust-label-group">
                        <Award size={18} className={`trust-icon trust-icon--${trust.level}`} />
                        <span className="horse-card__trustLabel">Trust Score</span>
                    </div>
                    <div className={`horse-card__trustValue horse-card__trustValue--${trust.level}`}>
                        <span className="score-num">{normalizedTrust}</span>
                        <span className="score-total">/100</span>
                    </div>
                </div>

                <div className="horse-card__progress">
                    <div
                        className={`horse-card__progressFill horse-card__progressFill--${trust.level}`}
                        style={{ width: `${normalizedTrust}%` }}
                    />
                </div>

                <p className={`horse-card__quality horse-card__quality--${trust.level}`}>
                    {trust.label}
                </p>
            </div>
        </article>
    );
}
