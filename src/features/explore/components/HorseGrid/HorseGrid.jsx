import React from 'react';
import HorseCard from '@shared/common/cards/HorseCard';
import './HorseGrid.css';

const HorseGrid = ({ horses, totalCount }) => {
    return (
        <div className="horse-grid-section">
            <p className="horse-grid-count">{totalCount} Caballos</p>
            <div className="horse-grid">
                {horses.map((horse) => (
                    <HorseCard key={horse.id} {...horse} />
                ))}
            </div>
        </div>
    );
};

export default HorseGrid;
