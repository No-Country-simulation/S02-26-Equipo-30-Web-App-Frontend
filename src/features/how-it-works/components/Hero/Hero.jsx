import React from 'react';
import './Hero.css';
import Badge from '@shared/common/badge/Badge';
import Btn from '@shared/common/button/Btn';
import { Sparkles } from '@shared/branding/icons';

const Hero = () => {
    return (
        <section className="how-hero">
            <div className="how-hero-container">
                <Badge className="process-badge">Proceso Simple y Transparente</Badge>
                <h1 className="how-hero-title">
                    Cómo Funciona <br />
                    <span className="brand-highlight">HorseTrust</span>
                </h1>
                <p className="how-hero-subtitle">
                    Tu camino hacia el caballo perfecto en 3 pasos simples. <br />
                    Confianza garantizada en cada transacción.
                </p>
                <div className="how-hero-actions">
                    <Btn className="btn-primary-how">Explorar Caballos →</Btn>
                    <Btn className="btn-secondary-how">Vender mi Caballo</Btn>
                </div>
            </div>
        </section>
    );
};

export default Hero;
