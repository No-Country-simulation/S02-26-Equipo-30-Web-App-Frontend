import React from 'react'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import SuccessStories from './components/SuccessStories/SuccessStories'
import SuccessHistoryCTA from './components/SuccessHistoryCTA/SuccessHistoryCTA'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <SuccessStories />
            <SuccessHistoryCTA />
        </>
    )
}

export default Home