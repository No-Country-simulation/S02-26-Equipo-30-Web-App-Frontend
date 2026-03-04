import React from 'react';
import { Shield, Crown } from '@shared/branding/icons';
import './DisciplineTabs.css';

const DisciplineTabs = ({
    activeTab,
    onTabChange,
    verified,
    onVerifiedChange,
    premium,
    onPremiumChange,
    disciplines = []
}) => {
    // If we have dynamic disciplines, ensure 'Todos' is used for the empty value
    // availableDisciplines coming from Explore should contain ['', 'Discipline1', ...]
    const displayDisciplines = disciplines.length > 0
        ? disciplines.map(d => d === '' ? 'Todos' : d)
        : ['Todos'];

    return (
        <div className="discipline-tabs-bar">
            <div className="discipline-tabs">
                {displayDisciplines.map((tab) => (
                    <button
                        key={tab}
                        className={`discipline-tab ${(activeTab === tab || (activeTab === '' && tab === 'Todos')) ? 'active' : ''}`}
                        onClick={() => onTabChange(tab === 'Todos' ? 'Todos' : tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="quick-filters">
                <button
                    className={`quick-filter-chip ${verified ? 'active' : ''}`}
                    onClick={() => onVerifiedChange(!verified)}
                >
                    <Shield size={14} />
                    Verificados
                </button>
                <button
                    className={`quick-filter-chip premium-chip ${premium ? 'active' : ''}`}
                    onClick={() => onPremiumChange(!premium)}
                >
                    <Crown size={14} />
                    Premium
                </button>
            </div>
        </div>
    );
};

export default DisciplineTabs;
