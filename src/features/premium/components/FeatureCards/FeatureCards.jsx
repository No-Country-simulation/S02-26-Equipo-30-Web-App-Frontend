import React from "react";
import "./FeatureCards.css";

const FeatureCards = () => {
    return (
        <section className="features">
            <div className="feature-card">
                <h3>Garantía Exclusiva</h3>
                <p>Revisión profesional y seguridad en cada venta.</p>
            </div>

            <div className="feature-card">
                <h3>Calidad Superior</h3>
                <p>Solo caballos con estándares premium.</p>
            </div>

            <div className="feature-card">
                <h3>Visibilidad VIP</h3>
                <p>Mayor exposición frente a compradores.</p>
            </div>
        </section>
    );
};

export default FeatureCards;