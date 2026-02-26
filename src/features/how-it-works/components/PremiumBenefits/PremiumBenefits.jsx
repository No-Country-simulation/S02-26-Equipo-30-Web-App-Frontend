import React from 'react';
import './PremiumBenefits.css';
import { Crown, Sparkles, User, Star, Award } from '@shared/branding/icons';
import Btn from '@shared/common/button/Btn';

const PremiumBenefits = () => {
    const benefits = [
        {
            icon: Sparkles,
            value: "0%",
            label: "Comisión primer mes"
        },
        {
            icon: User,
            value: "15k+",
            label: "Visitantes mensuales"
        },
        {
            icon: Award,
            value: "3x",
            label: "Más rápido"
        },
        {
            icon: Star,
            value: "98.5%",
            label: "Satisfacción"
        }
    ];

    return (
        <section className="premium-benefits-section">
            <div className="premium-benefits-container">
                <div className="premium-info">
                    <div className="premium-header">
                        <Crown className="crown-icon" size={48} />
                        <h2>Beneficios Premium para Vendedores</h2>
                    </div>
                    <p>Maximiza tu alcance con nuestro plan VIP y vende 3x más rápido</p>
                    <Btn className="btn-start-selling">Empezar a Vender →</Btn>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon-header">
                                <benefit.icon size={20} className="benefit-icon" />
                                <span className="benefit-value">{benefit.value}</span>
                            </div>
                            <span className="benefit-label">{benefit.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumBenefits;
