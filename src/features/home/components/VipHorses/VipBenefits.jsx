import React from 'react';
import { Crown, Shield, ArrowRight } from '@shared/branding/icons';

const VipBenefits = () => {
    const benefits = [
        "Garantía extendida de 60 días sin preguntas",
        "Soporte prioritario 24/7 con expertos ecuestres",
        "Certificación internacional y documentación completa",
        "Historial médico verificado por 3 veterinarios"
    ];

    return (
        <section className="vip-benefits-container">
            <div className="vip-benefits-content">
                <h3>
                    <Crown size={28} color="#d4af37" />
                    Beneficios Exclusivos VIP
                </h3>
                <ul className="vip-benefits-list">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="benefit-item">
                            <Shield size={18} className="check-icon" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="vip-cta-btn">
                Ver Colección VIP
                <ArrowRight size={20} />
            </button>
        </section>
    );
};

export default VipBenefits;
