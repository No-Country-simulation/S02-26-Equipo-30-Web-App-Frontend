import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical, Eye, Edit, Trash } from "@shared/branding/icons";
import "./HorseCard.css";

export default function HorseCard(props) {
    const navigate = useNavigate();
    // Soporta 2 formas:
    // 1) <HorseCard horse={horse} />
    // 2) <HorseCard {...horse} />
    const horse = props.horse ?? props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const {
        id = "",
        name = "Sin nombre",
        image = "https://via.placeholder.com/800x500",
        breed = "",
        age = "",
        height = "",
        discipline = "",
        tags = [],
        location = "",
        price = "",
        trustScore = 0,
        isVip = false,
        isFeatured = false,
    } = horse;

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 1) Si viene tags, úsalo. Si no, construye tags desde age/height/discipline
    const pills =
        Array.isArray(tags) && tags.length > 0
            ? tags
            : [age, height, discipline].filter(Boolean);

    const safeTrust = Math.max(0, Math.min(100, Number(trustScore) || 0));

    const getTrustMeta = (score) => {
        if (score >= 90) return { level: "excellent", label: "Excelente" };
        if (score >= 75) return { level: "good", label: "Muy bueno" };
        if (score >= 55) return { level: "fair", label: "Bueno" };
        return { level: "poor", label: "Mejorable" };
    };

    const trust = getTrustMeta(safeTrust);

    return (
        <article className="horse-card">
            <div className="horse-card__media">
                <img
                    className="horse-card__img"
                    src={image || "https://via.placeholder.com/800x500"}
                    alt={name}
                />

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
                                onClick={() => navigate('/detalle')}
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

                {(isVip || isFeatured) && (
                    <div className="horse-card__badges">
                        {isVip && <span className="badge badge--vip">VIP</span>}
                        {isFeatured && (
                            <span className="badge badge--featured">Destacado</span>
                        )}
                    </div>
                )}

                <button className="horse-card__play" type="button" aria-label="Play video">
                    ▶
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

                {location && <p className="horse-card__location">{location}</p>}

                <hr className="horse-card__divider" />

                <div className="horse-card__trustRow">
                    <span className="horse-card__trustLabel">Trust Score</span>
                    <span className="horse-card__trustValue">{safeTrust}/100</span>
                </div>

                <div className="horse-card__progress">
                    <div
                        className={`horse-card__progressFill horse-card__progressFill--${trust.level}`}
                        style={{ width: `${safeTrust}%` }}
                    />
                </div>

                <p className={`horse-card__quality horse-card__quality--${trust.level}`}>
                    {trust.label}
                </p>
            </div>
        </article>
    );
}
