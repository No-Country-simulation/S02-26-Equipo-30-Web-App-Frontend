import React, { useState } from "react";
import "./HorseProfile.css";
import { Shield, Sparkles, Award } from "@shared/branding/icons";

export default function HorseProfile({ horse }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);

    if (!horse) return null;

    return (
        <div className="container">
            <div className="cards-grid">

                {/* Veterinary Records */}
                <div className="card">
                    <div className="card-header">
                        <Shield size={20} color="#ca8a04" />
                        <h2>Veterinary Records</h2>
                    </div>
                    <div className="card-content">
                        {isLoggedIn ? (
                            <div className="logged-in-content">
                                <p className="font-medium">Exámenes realizados: {horse.vetTotalExams}</p>
                                <p>Problemas mayores detectados: {horse.vetMajorIssues}</p>
                                <p>Última actualización: {new Date(horse.trustScoreUpdatedAt).toLocaleDateString()}</p>
                                <span className={`status ${horse.trustScoreStatus?.toLowerCase()}`}>
                                    {horse.trustScoreStatus}
                                </span>
                            </div>
                        ) : (
                            <div className="locked-state">
                                <div className="lock-icon">🔒</div>
                                <p className="locked-title">Full veterinary records available to registered users</p>
                                <p className="locked-desc">Sign in to view complete medical history and exam results</p>
                                <button className="sign-in-btn" onClick={handleLogin}>Sign In to View</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Performance & Trust */}
                <div className="card">
                    <div className="card-header">
                        <Sparkles size={20} color="#ca8a04" />
                        <h2>Performance & Trust</h2>
                    </div>
                    <div className="card-content">
                        {isLoggedIn ? (
                            <div className="logged-in-content space-y-2">
                                <div className="trust-meter">
                                    <p>Puntaje de Confianza: {Math.round(horse.trustScore * 100)}%</p>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${horse.trustScore * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <p>Modelo de confianza: {horse.trustModelVersion}</p>
                                <p className="help-text">Todos los datos son verificados por nuestro sistema de IA.</p>
                            </div>
                        ) : (
                            <div className="locked-state">
                                <div className="lock-icon">🔒</div>
                                <p className="locked-title">Detailed trust analysis available</p>
                                <p className="locked-desc">View verified performance metrics and trust scores</p>
                                <button className="sign-in-btn" onClick={handleLogin}>Sign In to View</button>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Complete History & Background */}
            <div className="card history-card">
                <div className="card-header">
                    <Award size={20} color="#ca8a04" />
                    <h2>Complete History & Background</h2>
                </div>
                <div className="card-content">
                    {isLoggedIn ? (
                        <div className="logged-in-content space-y-2">
                            <p><strong>Linaje:</strong> {horse.lineage}</p>
                            <p><strong>Carreras realizadas:</strong> {horse.careerRaces}</p>
                            <p><strong>Días desde última carrera:</strong> {horse.daysSinceLastRace}</p>
                            <p><strong>País de nacimiento:</strong> {horse.birthCountry}</p>
                            <div className="seller-card">
                                <p>Vendedor Verificado</p>
                                <span className="seller-score">Disputas: {horse.sellerDisputes}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="locked-state">
                            <div className="lock-icon">🔒</div>
                            <p className="locked-title">Detailed ownership and competition history</p>
                            <p className="locked-desc">Access complete background, training timeline, and seller credentials</p>
                            <button className="sign-in-btn" onClick={handleLogin}>Sign In to View</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
