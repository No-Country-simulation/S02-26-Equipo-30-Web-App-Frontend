import React from 'react'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import SuccessStories from './components/SuccessStories/SuccessStories'
import SuccessHistoryCTA from './components/SuccessHistoryCTA/SuccessHistoryCTA'
import VipHorses from './components/VipHorses/VipHorses'
import Disciplines from './components/Disciplines/Disciplines'
import FeaturedHorses from './components/FeaturedHorses/FeaturedHorses'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <VipHorses />
            <Disciplines />
            <FeaturedHorses />
            <SuccessStories />
            <SuccessHistoryCTA />
        </>
    )
}

export default Home