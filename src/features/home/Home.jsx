import React from 'react'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import SuccessHistory from './components/SuccessHistory/SuccessHistory'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <SuccessHistory />
        </>
    )
}

export default Home