import React from 'react';
import './Steps.css';
import { Mail, Shield, Star } from '@shared/branding/icons';

const SellerSteps = () => {
    const steps = [
        {
            number: 1,
            icon: Mail, // Usando Mail como placeholder para "Publicar"
            title: "1. Crea tu Anuncio",
            description: "Formulario guiado paso a paso con validación automática de datos.",
            features: [
                "Fotos profesionales (hasta 20)",
                "Videos de rendimiento",
                "Certificados veterinarios"
            ]
        },
        {
            number: 2,
            icon: Star, // Usando Star para "Verificación"
            title: "2. Obtén Verificación",
            description: "Nuestro equipo verifica tu anuncio en menos de 24 horas.",
            features: [
                "Validación veterinaria gratuita",
                "Badge de vendedor certificado",
                "Mayor visibilidad garantizada"
            ]
        },
        {
            number: 3,
            icon: Shield, // Usando Shield para "Gestión"
            title: "3. Gestiona Interesados",
            description: "Dashboard completo para gestionar consultas y visitas.",
            features: [
                "Chat integrado con compradores",
                "Calendario de visitas",
                "Estadísticas en tiempo real"
            ]
        }
    ];

    return (
        <section className="steps-section seller-steps">
            <div className="steps-header">
                <span className="steps-label">PARA VENDEDORES</span>
                <h2 className="steps-title">
                    Vende con Confianza <br />
                    <span className="brand-highlight">Máxima Exposición</span>
                </h2>
                <p className="steps-subtitle">Alcanza a más de 15,000 compradores calificados cada mes</p>
            </div>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div key={step.number} className="step-card alternate">
                        <div className="step-icon-container">
                            <step.icon size={32} />
                        </div>
                        <h3 className="step-card-title">{step.title}</h3>
                        <p className="step-card-description">{step.description}</p>
                        <ul className="step-features">
                            {step.features.map((feature, index) => (
                                <li key={index}>
                                    <span className="check-icon">●</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SellerSteps;
