import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import localStorageHelper from '../helpers/localStorage'
import { addFavorite, removeFavorite } from '../actions'

function WeatherList() {
    const dailyForecasts = useSelector(state => state.weatherData.forecasts)
    const currentWeather = useSelector(state => state.weatherData.currentWeather)
    const location = useSelector(state => state.weatherData.location)
    const isMetric = useSelector(state => state.isCelsius)
    const isDayTime = currentWeather.isDayTime ? 'Day' : 'Night'
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favoritesData)


    // const checkFavoriteExcists = (locationKey) => {
    //     console.log(locationKey)
    //     if (favorites.length > 0) {
    //         console.log(true)
    //     }
    //     console.log(false)
    //     return false
    //     // favorites.forEach(favorite => {
    //     //     console.log(favorite.id + ' ' + locationKey)
    //     //     if (favorite.id == locationKey ) {
    //     //         console.log(true)
    //     //         return true
    //     //     } else {
    //     //         return false
    //     //     }
    //     // })
    // }

    // checkFavoriteExcists(215854)
    return (
        <div className="weather-forecast container">
            <div className="weather-current__today">
                <h2 className="weather-current__title">{location.LocalizedName}</h2>
                <div className="weather-forecast__current">
                    <p className="weather-forecast__day">Today</p>
                    <p className="weather-forecast__text">{currentWeather.WeatherText}</p>
                    <p className="weather-forecast__temp">{currentWeather.Temperature[isMetric ? 'Metric' : 'Imperial'].Value}{isMetric ? `℃` : '℉'}</p>
                </div>
                <button
                    className="weather-current__btn"
                    onClick={() => dispatch(
                        addFavorite(location.Key, location.LocalizedName)
                    )}>Add to Favorite</button>

            </div>
            {/* <button
                    onClick={() => localStorage.setItem('favorites', JSON.stringify(location))}>
                    Add to Favorite
                </button> */}


            {/* <button onClick={() => dispatch(removeFavorite(location.Key, location.LocalizedName))}>Remove Favorite</button> */}

            <div className="weather-forecast__list">
                {dailyForecasts.map((forecast, index) =>
                    <div key={index} className="weather-forecast__item">
                        <p className="weather-forecast__day">{moment(forecast.Date).format('ddd')}</p>
                        <p className="weather-forecast__icon"><i className={`wi icon-accu${forecast[isDayTime].Icon}`}></i></p>
                        <p className="weather-forecast__temp">{forecast.Temperature.Minimum.Value}℃ - {forecast.Temperature.Maximum.Value}℃</p>
                        <p className="weather__forecast__text">{forecast[isDayTime].IconPhrase}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherList;
