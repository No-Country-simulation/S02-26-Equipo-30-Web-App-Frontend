import React from 'react';
import { Search } from '@shared/branding/icons';
import './ExploreHeader.css';

const ExploreHeader = ({ searchValue, onSearchChange }) => {
    return (
        <div className="explore-header">
            <h1 className="explore-title">Explora Nuestro Catálogo Completo</h1>
            <p className="explore-subtitle">200 caballos de alta calidad esperando encontrar su nuevo hogar</p>
            <div className="explore-search-bar">
                <Search size={18} className="search-icon" />
                <input
                    type="text"
                    className="explore-search-input"
                    placeholder="Buscar por nombre, raza o disciplina..."
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ExploreHeader;
