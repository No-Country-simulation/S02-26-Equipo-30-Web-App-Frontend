import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '@/shared/common/button/Btn';
import Dropdown from '@/shared/common/dropdown/Dropdown';
import { ChevronDown, Search } from '@/shared/branding/icons';

const HeroSearch = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [discipline, setDiscipline] = useState('');

    const disciplinas = [
        { label: 'Todas', onClick: () => setDiscipline('') },
        { label: 'Show Jumping', onClick: () => setDiscipline('Show Jumping') },
        { label: 'Dressage', onClick: () => setDiscipline('Dressage') },
        { label: 'Western', onClick: () => setDiscipline('Western') },
    ];

    const popularSearches = ['Show Jumping', 'Dressage', 'Western', 'Premium'];

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (keyword) params.append('keyword', keyword);
        if (discipline) params.append('discipline', discipline);

        navigate(`/explorar?${params.toString()}`);
    };

    const handleTagClick = (tag) => {
        if (tag === 'Premium') {
            navigate('/explorar?premium=true');
        } else {
            navigate(`/explorar?keyword=${tag}`);
        }
    };

    return (
        <div className="hero-search-card">
            <h2 className="search-card-title">Encuentra tu Compañero Ideal</h2>

            <div className="search-field">
                <div className="input-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre, raza, disciplina..."
                        className="search-input"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
            </div>

            <div className="search-field">
                <Dropdown
                    className="disciplinas-dropdown"
                    trigger={
                        <div className="dropdown-trigger-content">
                            <span>{discipline || 'Disciplinas'}</span>
                            <ChevronDown size={16} />
                        </div>
                    }
                    items={disciplinas}
                />
            </div>

            <Btn className="btn-search" onClick={handleSearch}>
                <Search size={18} />Buscar Ahora
            </Btn>

            <div className="popular-searches">
                <span className="popular-label">BÚSQUEDAS POPULARES:</span>
                <div className="search-tags">
                    {popularSearches.map(tag => (
                        <span
                            key={tag}
                            className="search-tag"
                            onClick={() => handleTagClick(tag)}
                            style={{ cursor: 'pointer' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSearch;
