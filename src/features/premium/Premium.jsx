import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureCards from './components/FeatureCards/FeatureCards'
import PremiumIncludes from './components/PremiumIncludes/PremiumIncludes'
import StatsBar from './components/StatsBar/StatsBar'
import HorseGrid from './components/HorseGrid/HorseGrid'

function Premium() {
    return (
        <>
            <HeroSection />
            <FeatureCards />
            <PremiumIncludes />
            <StatsBar />
            <HorseGrid />
        </>
    )
}

export default Premium