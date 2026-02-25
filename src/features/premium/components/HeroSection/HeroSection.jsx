import React from "react";
import "./HeroSection.css";
import Badge from "@shared/common/badge/Badge";
import { Crown } from "@shared/branding/icons";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <Badge icon={Crown}>Premium Collection</Badge>
                <h1>Colección Premium HorseTrust</h1>
                <p>
                    Los mejores caballos seleccionados con garantía y visibilidad
                    exclusiva para compradores exigentes.
                </p>

                <div className="hero-features">
                    <div>✔ Verificados</div>
                    <div>✔ Alta calidad</div>
                    <div>✔ Soporte VIP</div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;