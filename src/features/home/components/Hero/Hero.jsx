import React from 'react';
import HeroContent from './HeroContent';
import HeroSearch from './HeroSearch';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-wrapper">
                <HeroContent />
                <HeroSearch />
            </div>
        </section>
    );
};

export default Hero;