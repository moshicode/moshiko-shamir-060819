import React from 'react'
import WeatherList from './WeatherList'
import HeroContainer from './HeroContainer'
import { useSelector } from 'react-redux'

const Home = () => {
    const isLoading = useSelector(state => state.isLoading)
    if (isLoading) return <div>Loading</div>
    return (
        <React.Fragment>
            <HeroContainer />
            <WeatherList />
        </React.Fragment>
    )
}

export default Home