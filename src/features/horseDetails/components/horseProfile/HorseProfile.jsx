import React, { useState } from "react";
import "./HorseProfile.css";

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
            <div className="cards-container">

                {/* Veterinary Records */}
                <div className="card">
                    <h2>Veterinary Records</h2>
                    {isLoggedIn ? (
                        <div className="mt-2">
                            <p className="font-medium">{veterinaryRecord.date} • {veterinaryRecord.vet}</p>
                            <p>{veterinaryRecord.notes}</p>
                            <span className="status">{veterinaryRecord.status}</span>
                        </div>
                    ) : (
                        <div className="mt-2">
                            <p>Full veterinary records available to registered users</p>
                            <button className="button" onClick={handleLogin}>Sign In to View</button>
                        </div>
                    )}
                </div>

                {/* Performance Videos */}
                <div className="card">
                    <h2>Performance Videos</h2>
                    {isLoggedIn ? (
                        <div className="mt-2 space-y-2">
                            {performanceVideos.map((video) => (
                                <div key={video.id} className="video-item">
                                    {video.title} - Click to view
                                </div>
                            ))}
                            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>All videos are verified and timestamped for authenticity</p>
                        </div>
                    ) : (
                        <div className="mt-2">
                            <p>Full performance video library available</p>
                            <button className="button" onClick={handleLogin}>Sign In to View</button>
                        </div>
                    )}
                </div>

            </div>
            {/* Complete History & Background */}
            <div className="card">
                <h2>Complete History & Background</h2>
                {isLoggedIn ? (
                    <div className="mt-2 space-y-2">
                        <p>Imported from Europe in {sellerInfo.importedYear}. Competed successfully. {sellerInfo.competitionRecord}.</p>
                        <div className="seller-card">
                            <p>{sellerInfo.name}</p>
                            <span className="seller-score">Seller Score: {sellerInfo.score}%</span>
                        </div>
                    </div>
                ) : (
                    <div className="mt-2">
                        <p>Detailed ownership and competition history</p>
                        <p>Access complete background, training timeline, and seller credentials</p>
                        <button className="button" onClick={handleLogin}>Sign In to View</button>
                    </div>
                )}
            </div>
        </div>
    );
}
