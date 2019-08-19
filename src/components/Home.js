import React from 'react'
import WeatherList from './WeatherList'
import Hero from './Hero'
import { useSelector } from 'react-redux'

const Home = () => {
    const isLoading = useSelector(state => state.isLoading)
    if (isLoading) return <div className="loading-wrapper"><div className="cloudy"></div></div>
    return (
        <>
            <Hero />
            <WeatherList />
        </>
    )
}

export default Home