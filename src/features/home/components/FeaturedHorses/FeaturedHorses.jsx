import React from 'react';
import HorseCard from '@shared/common/cards/HorseCard';
import { ArrowRight, Sparkles } from '@shared/branding/icons';
import Badge from '@components/badge/Badge';
import './FeaturedHorses.css';

const FeaturedHorses = () => {
    const featuredHorses = [
        {
            id: 1,
            name: "Midnight Star",
            price: "53.778",
            breed: "Andalusian",
            tags: ["11 years", "18.0 hh", "Hunter"],
            location: "Aiken, SC",
            trustScore: 94,
            image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: 2,
            name: "Royal Symphony",
            price: "79.286",
            breed: "Trakehner",
            tags: ["8 years", "16.2 hh", "Show Jumping"],
            location: "Charleston, SC",
            trustScore: 94,
            image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: 3,
            name: "Copper Sunset",
            price: "65.067",
            breed: "Trakehner",
            tags: ["14 years", "15.2 hh", "Show Jumping"],
            location: "Ocala, FL",
            trustScore: 95,
            image: "https://images.unsplash.com/photo-1518467166778-b8c6b252b19a?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: 4,
            name: "Silver Cloud",
            price: "67.369",
            breed: "Dutch Warmblood",
            tags: ["4 years", "17.0 hh", "Cutting"],
            location: "Saratoga Springs, NY",
            trustScore: 95,
            image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: 5,
            name: "Golden Promise",
            price: "81.501",
            breed: "Arabian",
            tags: ["7 years", "15.1 hh", "Dressage"],
            location: "Lexington, KY",
            trustScore: 93,
            image: "https://images.unsplash.com/photo-1523467113937-24a471f87fdc?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        },
        {
            id: 6,
            name: "Eclipse",
            price: "53.027",
            breed: "Westphalian",
            tags: ["6 years", "17.2 hh", "Endurance"],
            location: "Charleston, SC",
            trustScore: 96,
            image: "https://images.unsplash.com/photo-1520108930432-8cf3bb519280?q=80&w=800&auto=format&fit=crop",
            isVip: true,
            isFeatured: true
        }
    ];

    return (
        <section className="featured-horses-section">
            <div className="section-container">
                <header className="featured-header">
                    <div className="header-left">
                        <Badge className="featured-badge">
                            DESTACADOS
                        </Badge>
                        <h2 className="featured-title">
                            Caballos que <br /> Marcan la Diferencia
                        </h2>
                    </div>
                    <div className="header-right">
                        <button className="view-all-btn">
                            Ver Todos (200) <ArrowRight size={18} />
                        </button>
                    </div>
                </header>

                <div className="featured-grid">
                    {featuredHorses.map(horse => (
                        <HorseCard key={horse.id} {...horse} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedHorses;
