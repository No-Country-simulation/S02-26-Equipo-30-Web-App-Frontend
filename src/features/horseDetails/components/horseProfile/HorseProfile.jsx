import React, { useState } from "react";
import "./HorseProfile.css";
import { Shield, Sparkles, Award } from "@shared/branding/icons";

// Simulación de datos
const veterinaryRecord = {
    date: "2026-01-15",
    vet: "Dr. Sarah Mitchell, DVM",
    notes: "No significant findings. Excellent cardiovascular health, clean joints, optimal flexion tests.",
    status: "Excellent"
};

const performanceVideos = [
    { id: 1, title: "Performance Video 1" },
    { id: 2, title: "Performance Video 2" }
];

const sellerInfo = {
    name: "Elite Equine Center",
    score: 93,
    importedYear: 2024,
    competitionRecord: "Clean competition record"
};

export default function HorseProfile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);

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
                                <p className="font-medium">{veterinaryRecord.date} • {veterinaryRecord.vet}</p>
                                <p>{veterinaryRecord.notes}</p>
                                <span className="status">{veterinaryRecord.status}</span>
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

                {/* Performance Videos */}
                <div className="card">
                    <div className="card-header">
                        <Sparkles size={20} color="#ca8a04" />
                        <h2>Performance Videos</h2>
                    </div>
                    <div className="card-content">
                        {isLoggedIn ? (
                            <div className="logged-in-content space-y-2">
                                {performanceVideos.map((video) => (
                                    <div key={video.id} className="video-item">
                                        {video.title} - Click to view
                                    </div>
                                ))}
                                <p className="help-text">All videos are verified and timestamped for authenticity</p>
                            </div>
                        ) : (
                            <div className="locked-state">
                                <div className="lock-icon">🔒</div>
                                <p className="locked-title">Full performance video library available</p>
                                <p className="locked-desc">View verified competition footage and training videos</p>
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
                            <p>Imported from Europe in {sellerInfo.importedYear}. Competed successfully. {sellerInfo.competitionRecord}.</p>
                            <div className="seller-card">
                                <p>{sellerInfo.name}</p>
                                <span className="seller-score">Seller Score: {sellerInfo.score}%</span>
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
