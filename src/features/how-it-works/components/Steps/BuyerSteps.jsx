import React from 'react';
import './Steps.css';
import { Search, Shield, Award } from '@shared/branding/icons';

const BuyerSteps = () => {
    const steps = [
        {
            number: 1,
            icon: Search,
            title: "Busca y Filtra",
            description: "Explora más de 2,400 caballos verificados. Usa filtros avanzados por disciplina, raza, precio y ubicación.",
            features: [
                "Búsqueda inteligente por criterios múltiples",
                "Filtros por verificación veterinaria",
                "Guardado y comparación de favoritos"
            ]
        },
        {
            number: 2,
            icon: Award, // Usando Award como placeholder para "Verifica"
            title: "Verifica y Conoce",
            description: "Accede a información completa: historial médico, videos de rendimiento y puntuación de credibilidad del vendedor.",
            features: [
                "Historial veterinario completo y certificado",
                "Videos HD de entrenamiento y desempeño",
                "Contacto directo y visita programada"
            ]
        },
        {
            number: 3,
            icon: Shield,
            title: "Compra Segura",
            description: "Pago protegido con garantía de 30 días. Si no estás satisfecho, devolución sin preguntas.",
            features: [
                "Pago seguro con protección del comprador",
                "Garantía de 30 días sin preguntas",
                "Soporte 24/7 durante toda la transacción"
            ]
        }
    ];

    return (
        <section className="steps-section">
            <div className="steps-header">
                <span className="steps-label">PARA COMPRADORES</span>
                <h2 className="steps-title">
                    Encuentra tu Compañero <br />
                    <span className="brand-highlight">en 3 Pasos</span>
                </h2>
                <p className="steps-subtitle">Proceso diseñado para máxima confianza y seguridad</p>
            </div>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div key={step.number} className="step-card">
                        <div className="step-number">{step.number}</div>
                        <div className="step-icon-container">
                            <step.icon size={32} />
                        </div>
                        <h3 className="step-card-title">{step.title}</h3>
                        <p className="step-card-description">{step.description}</p>
                        <ul className="step-features">
                            {step.features.map((feature, index) => (
                                <li key={index}>
                                    <span className="check-icon">✔</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BuyerSteps;
