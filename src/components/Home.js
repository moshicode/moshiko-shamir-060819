import React from 'react'
import WeatherList from './WeatherList'
import Hero from './Hero'

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <WeatherList />
        </React.Fragment>
    )
}

export default Home