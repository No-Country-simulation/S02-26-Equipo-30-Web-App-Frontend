import React from 'react';
import { Shield, Crown } from '@shared/branding/icons';
import './DisciplineTabs.css';

const DISCIPLINES = ['Todos', 'Barrel Racing', 'Cutting', 'Dressage', 'Endurance'];

const DisciplineTabs = ({ activeTab, onTabChange, verified, onVerifiedChange, premium, onPremiumChange }) => {
    return (
        <div className="discipline-tabs-bar">
            <div className="discipline-tabs">
                {DISCIPLINES.map((tab) => (
                    <button
                        key={tab}
                        className={`discipline-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => onTabChange(tab)}
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
