import React from 'react'
import SearchLocation from './SearchLocation'
import { useSelector } from 'react-redux'



const Hero = () => {
    const currentWeather = useSelector(state => state.weatherData.currentWeather)
    console.log(currentWeather)
    return (
        <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(245, 177, 83, 0.75), #fff), url(${currentWeather.Photos})` }} >
            <div className="hero__search">
                <SearchLocation />
            </div>
        </div >
    )
}


export default Hero