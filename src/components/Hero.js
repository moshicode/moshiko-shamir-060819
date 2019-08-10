import React from 'react'
import SearchLocation from './SearchLocation'
import { useSelector } from 'react-redux'



const Hero = () => {
    const currentWeather = useSelector(state => state.weatherData.currentWeather)
    const isDarkMode = useSelector(state => state.isDark)
    console.log(isDarkMode)

    const HeroStyle = `linear-gradient(rgba(245, 177, 83, 0.75), ${isDarkMode ? '#000718' : '#fff'}), url(${currentWeather.Photos})`
    console.log(HeroStyle)
    return (
        <div className="hero" style={{ backgroundImage: HeroStyle }} >
            <SearchLocation />
        </div>
    )
}


export default Hero