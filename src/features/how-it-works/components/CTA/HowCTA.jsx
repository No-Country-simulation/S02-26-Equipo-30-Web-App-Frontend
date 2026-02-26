import React from 'react';
import './HowCTA.css';
import Btn from '@shared/common/button/Btn';

const HowCTA = () => {
    return (
        <section className="how-cta-section">
            <div className="how-cta-container">
                <h2 className="how-cta-title">¿Listo para Empezar?</h2>
                <p className="how-cta-subtitle">Únete a miles de jinetes y vendedores que confían en HorseTrust</p>
                <div className="how-cta-actions">
                    <Btn className="btn-cta-primary">Ver Caballos Disponibles</Btn>
                    <Btn className="btn-cta-secondary">Confianza y Seguridad</Btn>
                </div>
            </div>
        </section>
    );
};

export default HowCTA;
