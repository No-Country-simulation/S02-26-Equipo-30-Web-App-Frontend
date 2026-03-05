import React, { useState } from "react";
import "./HorseProfile.css";
import { Shield, Sparkles, Award } from "@shared/branding/icons";
import { useAuth } from "@shared/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HorseProfile({ horse }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => navigate("/login");

    if (!horse) return null;

    return (
        <div className="container">
            <div className="cards-grid">

                {/* Veterinary Records */}
                <div className="card">
                    <div className="card-header">
                        <Shield size={20} color="#ca8a04" />
                        <h2>Registros Veterinarios</h2>
                    </div>
                    <div className="card-content">
                        {isAuthenticated ? (
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
                                <p className="locked-title">Registros veterinarios completos disponibles para usuarios registrados</p>
                                <p className="locked-desc">Inicia sesión para ver el historial médico completo y los resultados de los exámenes.</p>
                                <button className="sign-in-btn" onClick={handleLogin}>Iniciar Sesión para Ver</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Performance & Trust */}
                <div className="card">
                    <div className="card-header">
                        <Sparkles size={20} color="#ca8a04" />
                        <h2>Rendimiento y Confianza</h2>
                    </div>
                    <div className="card-content">
                        {isAuthenticated ? (
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
                                <p className="locked-title">Análisis de confianza detallado disponible</p>
                                <p className="locked-desc">Visualiza métricas de rendimiento verificadas y puntajes de confianza.</p>
                                <button className="sign-in-btn" onClick={handleLogin}>Iniciar Sesión para Ver</button>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Complete History & Background */}
            <div className="card history-card">
                <div className="card-header">
                    <Award size={20} color="#ca8a04" />
                    <h2>Historial Completo y Antecedentes</h2>
                </div>
                <div className="card-content">
                    {isAuthenticated ? (
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
                            <p className="locked-title">Historial detallado de propiedad y competencia</p>
                            <p className="locked-desc">Accede al trasfondo completo, cronograma de entrenamiento y credenciales del vendedor.</p>
                            <button className="sign-in-btn" onClick={handleLogin}>Iniciar Sesión para Ver</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
