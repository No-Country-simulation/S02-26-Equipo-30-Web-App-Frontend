import React from 'react'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import SuccessStories from './components/SuccessStories/SuccessStories'
import SuccessHistoryCTA from './components/SuccessHistoryCTA/SuccessHistoryCTA'
import VipHorses from './components/VipHorses/VipHorses'
import Disciplines from './components/Disciplines/Disciplines'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Disciplines />
            <VipHorses />
            <SuccessStories />
            <SuccessHistoryCTA />
        </>
    )
}

export default Home