import React from 'react';
import './Stats.css';

const Stats = () => {
    const statsData = [
        {
            number: '2.4',
            unit: 'k+',
            label: 'CABALLOS',
        },
        {
            number: '850',
            unit: '+',
            label: 'VENDEDORES',
        },
        {
            number: '98.5',
            unit: '%',
            label: 'SATISFACCIÓN',
        },
        {
            number: '30',
            unit: 'días',
            label: 'GARANTÍA',
            hasUnderline: true,
        },
    ];

    return (
        <div className="stats-wrapper">
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-item">
                        {stat.hasUnderline && <div className="underline"></div>}
                        <div className="stat-number">
                            {stat.number}
                            <span className="stat-unit">{stat.unit}</span>
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
