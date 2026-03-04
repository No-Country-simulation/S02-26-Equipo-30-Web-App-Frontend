import React, { useEffect, useState } from "react";
import "./HorseDetails.css";
import Btn from "@/shared/common/button/Btn";
import HorseProfile from "./components/horseProfile/HorseProfile";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, Message, MapPin, Calendar, Ruler, Weight, Gauge, Info } from "@shared/branding/icons";
import { horseService } from "@features/horse-management/horseService";
import { stripeService } from "@features/stripe/stripeService";

export default function HorseDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [horse, setHorse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        const fetchHorse = async () => {
            try {
                setLoading(true);
                const response = await horseService.getHorseById(id);
                setHorse(response.data);

                // TEST: Hacer un GET a /api/v1/horses y loguearlo
                const allHorsesResponse = await horseService.getHorses();
                console.log("=== GET /api/v1/horses RES ===", allHorsesResponse);
            } catch (err) {
                console.error("Error fetching horse details:", err);
                setError("No se pudo cargar la información del caballo.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchHorse();
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
            const response = await stripeService.createCheckoutSession([id]);

            if (response && response.url) {
                window.location.href = response.url;
            } else {
                throw new Error("No se recibió una URL de redirección válida.");
            }
        } catch (err) {
            console.error("Error initiating checkout:", err);
            alert("Hubo un problema al iniciar el proceso de interés. Por favor, intenta de nuevo.");
        } finally {
            setIsCheckingOut(false);
        }
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
                        src={horse.imageUrl || "https://picsum.photos/900/700?random=horse"}
                        alt={horse.name}
                        className="horse-image"
                    />
                    <button className="favorite">
                        <Heart size={20} color="#000" />
                    </button>
                </div>

                <div className="info-section">
                    <div className="title-header">
                        <h1 className="title">{horse.name}</h1>
                        <span className={`sex-badge ${horse.sex?.toLowerCase()}`}>{horse.sex}</span>
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
                                <p className="label">Uso Principal</p>
                                <p>{horse.mainUse}</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="description">
                        <h3>Descripción y Temperamento</h3>
                        <p>
                            {horse.name} es un ejemplar de temperamento <strong>{horse.temperament}</strong>.
                            Ideal para <strong>{horse.mainUse}</strong>.
                        </p>
                        <div className="extra-stats">
                            <p><strong>Linaje:</strong> {horse.lineage || "No especificado"}</p>
                            <p><strong>Carreras realizadas:</strong> {horse.careerRaces}</p>
                            <p><strong>Días desde última carrera:</strong> {horse.daysSinceLastRace}</p>
                        </div>
                    </div>

                    <div className="vet-summary">
                        <h3>Estado Veterinario</h3>
                        <div className="vet-stats">
                            <p><span>Exámenes totales:</span> {horse.vetTotalExams}</p>
                            <p><span>Problemas mayores:</span> {horse.vetMajorIssues}</p>
                            <p><span>Estado de puntaje:</span> <span className={`status-${horse.trustScoreStatus?.toLowerCase()}`}>{horse.trustScoreStatus}</span></p>
                        </div>
                    </div>

                    <div className="listing-actions">
                        <Btn
                            className="chat-btn"
                            onClick={() => navigate(`/chat?horseId=${horse.id}`)}
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
                    </div>
                </div>
            </div>
            <HorseProfile horse={horse} />
        </div>
    );
}
