import React from 'react'
import WeatherList from './WeatherList'
import HeroContainer from './HeroContainer'
import { useSelector } from 'react-redux'

const Home = () => {
    const isLoading = useSelector(state => state.isLoading)
    if (isLoading) return <div className="loading-wrapper"><div className="cloudy"></div></div>
    return (
        <>
            <HeroContainer />
            <WeatherList />
        </>
    )
}

export default Home