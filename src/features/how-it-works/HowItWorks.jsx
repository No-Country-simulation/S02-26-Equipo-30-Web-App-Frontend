import React from 'react';
import './HowItWorks.css';
import Hero from './components/Hero/Hero';
import BuyerSteps from './components/Steps/BuyerSteps';
import SellerSteps from './components/Steps/SellerSteps';
import PremiumBenefits from './components/PremiumBenefits/PremiumBenefits';
import HowCTA from './components/CTA/HowCTA';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <Hero />
            <BuyerSteps />
            <SellerSteps />
            <PremiumBenefits />
            <HowCTA />
        </div>
    );
};

export default HowItWorks;
