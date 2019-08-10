import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

function WeatherList() {
    const dailyForecasts = useSelector(state => state.weatherData.forecasts)
    const currentWeather = useSelector(state => state.weatherData.currentWeather)
    const location = useSelector(state => state.weatherData.location)

    return (
        <div className="weather-forecast container">
            <div className="weather-current">
                <h2 className="weather-current__title">{location.LocalizedName}</h2>
                <button onClick={() => localStorage.setItem('locationKey', {})}>Add to Favorite</button>

            </div>
            <div className="weather-forecast__list">
                <div className="weather-forecast__current">
                    <p className="weather-forecast__day">Today</p>
                    <p className="weather-forecast__text">{currentWeather.WeatherText}</p>
                    <p className="weather-forecast__temp">{currentWeather.Temperature.Metric.Value}</p>
                </div>
                {dailyForecasts.map((forecast, index) =>
                    <div key={index} className="weather-forecast__item">
                        <p className="weather-forecast__day">{moment(forecast.Date).format('ddd')}</p>
                        <p className="weather-forecast__temp">23</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherList;
