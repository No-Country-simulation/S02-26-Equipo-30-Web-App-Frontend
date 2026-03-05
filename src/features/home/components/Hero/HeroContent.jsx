import React from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '@/shared/common/button/Btn';
import Badge from '@/shared/common/badge/Badge';
import { ArrowRight, Sparkles } from '@/shared/branding/icons';

const HeroContent = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-content">
            <Badge icon={Sparkles} className="hero-badge-margin">
                Marketplace #1 de Caballos de Alta Confianza
            </Badge>

            <h1 className="hero-title">
                Tu Próximo <span className="text-gold">Campeón</span> Te Espera
            </h1>

            <p className="hero-subtitle">
                Más de 2,400 caballos verificados por veterinarios.
                Compra con total confianza y garantía de 30 días.
            </p>

            <div className="hero-actions">
                <Btn className="btn-primary" onClick={() => navigate('/explorar')}>
                    Explorar Caballos<ArrowRight size={16} />
                </Btn>
                <Btn className="btn-secondary" onClick={() => navigate('/caballo/nuevo')}>
                    Vender mi Caballo<ArrowRight size={16} />
                </Btn>
            </div>
        </div>
    );
};

export default HeroContent;
