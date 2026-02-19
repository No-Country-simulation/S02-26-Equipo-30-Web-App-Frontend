import React from 'react';
import './FilterSidebar.css';

const DISCIPLINES = ['', 'Barrel Racing', 'Cutting', 'Dressage', 'Endurance', 'Hunter', 'Show Jumping'];
const BREEDS = ['', 'Andalusian', 'Arabian', 'Dutch Warmblood', 'Morgan', 'Trakehner', 'Westphalian'];

const FilterSidebar = ({ filters, onFilterChange }) => {
    const handleChange = (key, value) => {
        onFilterChange({ ...filters, [key]: value });
    };

    return (
        <aside className="filter-sidebar">
            <h3 className="filter-sidebar-title">Filtros</h3>

            <div className="filter-group">
                <label className="filter-label">Disciplina</label>
                <select
                    className="filter-select"
                    value={filters.discipline}
                    onChange={(e) => handleChange('discipline', e.target.value)}
                >
                    {DISCIPLINES.map((d) => (
                        <option key={d} value={d}>{d || 'Todas'}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Raza</label>
                <select
                    className="filter-select"
                    value={filters.breed}
                    onChange={(e) => handleChange('breed', e.target.value)}
                >
                    {BREEDS.map((b) => (
                        <option key={b} value={b}>{b || 'Todas'}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Ubicación</label>
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Ciudad, Estado..."
                    value={filters.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                />
            </div>

            <div className="filter-group">
                <label className="filter-label">Rango de Precio</label>
                <div className="price-range-inputs">
                    <input
                        type="number"
                        className="filter-input price-input"
                        placeholder="0"
                        min={0}
                        value={filters.priceMin}
                        onChange={(e) => handleChange('priceMin', e.target.value)}
                    />
                    <span className="price-separator">–</span>
                    <input
                        type="number"
                        className="filter-input price-input"
                        placeholder="200000"
                        min={0}
                        value={filters.priceMax}
                        onChange={(e) => handleChange('priceMax', e.target.value)}
                    />
                </div>
                <input
                    type="range"
                    className="price-slider"
                    min={0}
                    max={200000}
                    step={1000}
                    value={filters.priceMax || 200000}
                    onChange={(e) => handleChange('priceMax', e.target.value)}
                />
                <div className="price-range-labels">
                    <span>$0</span>
                    <span>$200,000</span>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
