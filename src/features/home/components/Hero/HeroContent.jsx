import React from 'react';
import Btn from '@/shared/common/button/Btn';
import { Crown } from '@/shared/branding/icons';

const HeroContent = () => {
    return (
        <div className="hero-content">
            <div className="hero-badge">
                <Crown size={16} color="#d4af37" />
                <span>Marketplace #1 de Caballos de Alta Confianza</span>
            </div>

            <h1 className="hero-title">
                Tu Próximo <span className="text-gold">Campeón</span> Te Espera
            </h1>

            <p className="hero-subtitle">
                Más de 2,400 caballos verificados por veterinarios.
                Compra con total confianza y garantía de 30 días.
            </p>

            <div className="hero-actions">
                <Btn className="btn-primary">
                    Explorar Caballos →
                </Btn>
                <Btn className="btn-secondary">
                    Vender mi Caballo →
                </Btn>
            </div>
        </div>
    );
};

export default HeroContent;
