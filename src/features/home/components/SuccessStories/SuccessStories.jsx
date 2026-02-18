import React from 'react';
import './SuccessStories.css';
import { Star } from '@shared/branding/icons';

const SuccessStories = () => {
    const testimonials = [
        {
            id: 1,
            name: "María Castillo",
            role: "Doma Clásica • Madrid",
            text: "Encontré el caballo perfecto para doma clásica. La verificación veterinaria completa me dio total confianza. ¡Proceso impecable!",
            rating: 5,
            initials: "MC",
            color: "#c19a5b" // Goldish
        },
        {
            id: 2,
            name: "Javier Ramírez",
            role: "Vendedor Certificado",
            text: "Como vendedor, la plataforma me permitió destacar la calidad de mis caballos. Vendí 3 en 2 meses. ¡Altamente recomendado!",
            rating: 5,
            initials: "JR",
            color: "#006d6d" // Tealish
        },
        {
            id: 3,
            name: "Ana López",
            role: "Salto • Barcelona",
            text: "La transparencia es increíble. Videos, historial médico completo y soporte durante todo el proceso. Compré sin preocupaciones.",
            rating: 5,
            initials: "AL",
            color: "#c19a5b" // Goldish
        }
    ];

    return (
        <section className="success-stories-section">
            <div className="success-stories-header">
                <span className="section-tag">TESTIMONIOS</span>
                <h2 className="section-title">Historias de Éxito</h2>
                <p className="section-subtitle">Más de 1,200 compradores y vendedores confían en HorseTrust</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <div className="stars-row">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={18} fill="#d1a054" color="#d1a054" />
                            ))}
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="testimonial-author">
                            <div
                                className="author-avatar"
                                style={{ backgroundColor: testimonial.color }}
                            >
                                {testimonial.initials}
                            </div>
                            <div className="author-info">
                                <h4 className="author-name">{testimonial.name}</h4>
                                <p className="author-role">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;
