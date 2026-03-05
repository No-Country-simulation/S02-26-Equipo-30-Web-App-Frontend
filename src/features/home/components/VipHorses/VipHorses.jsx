import React from 'react';
import HorseCard from '@shared/common/cards/HorseCard';
import VipBenefits from './VipBenefits';
import { Crown } from '@shared/branding/icons';
import Badge from '@components/badge/Badge';
import './VipHorses.css';

const VipHorses = () => {

    const vipHorses = [
        {
            id: "V-9821",
            name: "Adriatic Pearl",
            price: "30,457",
            breed: "Lusitano",
            tags: ["8 years", "18.1 hh", "Barrel Racing"],
            location: "Lake Forest, IL",
            trustScore: 97,
            image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: "V-7742",
            name: "Outstanding Beauty",
            price: "27,614",
            breed: "Hanoverian",
            tags: ["11 years", "15.1 hh", "Reining"],
            location: "Parker, CO",
            trustScore: 73,
            image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: "V-1129",
            name: "Beautiful Day",
            price: "33,395",
            breed: "Lusitano",
            tags: ["11 years", "18.2 hh", "Hunter"],
            location: "Wellington, FL",
            trustScore: 70,
            image: "https://images.unsplash.com/photo-1523467113937-24a471f87fdc?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        }
    ];

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
                {vipHorses.map((horse) => (
                    <HorseCard key={horse.id} {...horse} />
                ))}
            </div>

            <VipBenefits />
        </section>
    );
};

export default VipHorses;
