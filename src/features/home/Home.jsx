import React from 'react'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import SuccessHistoryCTA from './components/SuccessHistoryCTA/SuccessHistoryCTA'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <SuccessHistoryCTA />
        </>
    )
}

export default Home