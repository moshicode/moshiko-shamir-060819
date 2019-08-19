import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'

const Hero = () => {
    const currentWeather = useSelector(state => state.weather.current)
    const isDarkMode = useSelector(state => state.isDark)
    const heroImage = `linear-gradient(rgba(245, 177, 83, 0.75), ${isDarkMode ? '#000718' : '#fff'}), url(${currentWeather.Photos[0].LandscapeLink.replace("_L_L", "_L_XXL")})`
    return (
        <div className="hero" style={{ backgroundImage: heroImage }} >
            <SearchInput />
        </div>
    )
}

export default Hero