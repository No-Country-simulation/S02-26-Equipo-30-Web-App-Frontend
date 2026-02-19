import React from 'react';
import HorseCard from "@shared/common/cards/HorseCard";
import VipBenefits from './VipBenefits';
import { Crown } from '@shared/branding/icons';
import Badge from '@components/badge/Badge';
import './VipHorses.css';

const VipHorses = () => {

    const placeholders = [1, 2, 3];

    return (
        <section className="vip-horses-section">
            <header className="vip-header">
                <Badge icon={Crown}>
                    Colección Exclusiva
                </Badge>
                <div className="vip-title-container">
                    <h2>Caballos VIP</h2>
                    <span className="highlight">Premium</span>
                </div>
                <p className="vip-description">
                    Élite ecuestre con pedigríes excepcionales, validación veterinaria completa y
                    garantía extendida de 60 días
                </p>
            </header>

            <div className="vip-cards-grid">
                {placeholders.map((id) => (
                    <HorseCard key={id} />
                ))}
            </div>

            <VipBenefits />
        </section>
    );
};

export default VipHorses;
