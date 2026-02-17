import React from 'react';
import './SuccessHistory.css';
import {
    Search,
    ArrowRight,
    Shield,
    Award,
    Heart,
    Support
} from '@shared/branding/icons';

const SuccessHistory = () => {
    const features = [
        {
            icon: <Shield size={32} />,
            label: 'Verificación Veterinaria',
        },
        {
            icon: <Award size={32} />,
            label: 'Certificación Internacional',
        },
        {
            icon: <Heart size={32} />,
            label: 'Garantía 30 Días Sin Preguntas',
        },
        {
            icon: <Support size={32} />,
            label: 'Soporte 24/7 Especializado',
        },
    ];

    return (
        <section className="success-history">
            <div className="success-content">
                <h2>
                    Comienza tu Historia
                    <span>de Éxito Encuestre</span>
                </h2>

                <p className="success-subtitle">
                    Únete a miles de jinetes que ya encontraron su compañero ideal con total confianza y garantía
                </p>

                <div className="success-actions">
                    <button className="btn-explore">
                        Explorar Caballos
                        <Search size={18} />
                    </button>
                    <button className="btn-sell">
                        Vender mi Caballo
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div className="success-features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-label">{feature.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessHistory;
