import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureCards from './components/FeatureCards/FeatureCards'
import PremiumIncludes from './components/PremiumIncludes/PremiumIncludes'
import StatsBar from './components/StatsBar/StatsBar'
import HorseGrid from './components/HorseGrid/HorseGrid'
import CTASection from './components/CTASection/CTASection'

function Premium() {
    return (
        <>
            <HeroSection />
            <FeatureCards />
            <PremiumIncludes />
            <StatsBar />
            <HorseGrid />
            <CTASection />
        </>
    )
}

export default Premium