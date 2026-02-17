import React from 'react';
import Btn from '@/shared/common/button/Btn';
import Dropdown from '@/shared/common/dropdown/Dropdown';
import { ChevronDown } from '@/shared/branding/icons';

const HeroSearch = () => {
    const disciplinas = [
        { label: 'Salto', onClick: () => console.log('Salto selected') },
        { label: 'Doma', onClick: () => console.log('Doma selected') },
        { label: 'Western', onClick: () => console.log('Western selected') },
    ];

    const popularSearches = ['Salto', 'Doma', 'Western', 'Premium'];

    return (
        <div className="hero-search-card">
            <h2 className="search-card-title">Encuentra tu Compañero Ideal</h2>

            <div className="search-field">
                <div className="input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Buscar por nombre, raza, disciplina..."
                        className="search-input"
                    />
                </div>
            </div>

            <div className="search-field">
                <Dropdown
                    className="disciplinas-dropdown"
                    trigger={
                        <div className="dropdown-trigger-content">
                            <span>Disciplinas</span>
                            <ChevronDown size={16} />
                        </div>
                    }
                    items={disciplinas}
                />
            </div>

            <Btn className="btn-search">
                <span>🔍</span> Buscar Ahora
            </Btn>

            <div className="popular-searches">
                <span className="popular-label">BÚSQUEDAS POPULARES:</span>
                <div className="search-tags">
                    {popularSearches.map(tag => (
                        <span key={tag} className="search-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSearch;
