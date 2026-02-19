import React from 'react';
import Badge from '@components/badge/Badge';
import './Disciplines.css';

const DisciplineCard = ({ title, description, count, tag, image, className = '' }) => {
    return (
        <div className={`discipline-card ${className}`} style={{ backgroundImage: `url(${image})` }}>
            <div className="card-overlay">
                <div className="card-content">
                    {tag && <span className="discipline-tag">{tag}</span>}
                    <h3 className="discipline-card-title">{title}</h3>
                    <p className="discipline-card-description">{description}</p>
                    {count && (
                        <div className="discipline-card-footer">
                            <span>{count}</span>
                            <span className="arrow">→</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Disciplines = () => {
    const disciplinesData = [
        {
            id: 'salto',
            title: 'Salto',
            description: 'Caballos de competición y alto rendimiento internacional',
            count: '320+ disponibles',
            tag: 'Más Popular',
            image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop',
            className: 'card-salto'
        },
        {
            id: 'doma',
            title: 'Doma Clásica',
            description: 'Elegancia y precisión',
            image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop',
            className: 'card-doma'
        },
        {
            id: 'western',
            title: 'Western',
            description: 'Tradición',
            image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop',
            className: 'card-western'
        },
        {
            id: 'completo',
            title: 'Completo',
            description: 'Versatilidad',
            image: 'https://images.unsplash.com/photo-1518467166778-b8c6b252b19a?q=80&w=800&auto=format&fit=crop',
            className: 'card-completo'
        },

    ];

    return (
        <section className="disciplines-section">
            <header className="disciplines-header">
                <Badge className="disciplines-badge">DISCIPLINAS</Badge>
                <h2 className="disciplines-title">Encuentra tu Especialidad</h2>
                <p className="disciplines-description">
                    Desde salto olímpico hasta paseos tranquilos, tenemos el compañero perfecto para cada jinete
                </p>
            </header>

            <div className="disciplines-grid">
                {disciplinesData.map((discipline) => (
                    <DisciplineCard key={discipline.id} {...discipline} />
                ))}
            </div>
        </section>
    );
};

export default Disciplines;
