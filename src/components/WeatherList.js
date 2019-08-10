import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

function WeatherList() {
    const dailyForecasts = useSelector(state => state.weatherData.forecasts)
    const currentWeather = useSelector(state => state.weatherData.currentWeather)
    const location = useSelector(state => state.weatherData.location)
    const isMetric = useSelector(state => state.isCelsius)

    const isDayTime = currentWeather.isDayTime ? 'Day' : 'Night'

    return (
        <div className="weather-forecast container">
            <div className="weather-current">
                <div className="weather-current__today">
                    <h2 className="weather-current__title">{location.LocalizedName}</h2>
                    <div className="weather-forecast__current">
                        <p className="weather-forecast__day">Today</p>
                        <p className="weather-forecast__text">{currentWeather.WeatherText}</p>
                        <p className="weather-forecast__temp">{currentWeather.Temperature[isMetric ? 'Metric' : 'Imperial'].Value}{isMetric ? 'C' : 'F'}</p>
                    </div>

                </div>
                {/* <button
                    onClick={() => localStorage.setItem('favorites', JSON.stringify(location))}>
                    Add to Favorite
                </button> */}
            </div>
            <div className="weather-forecast__list">

                {dailyForecasts.map((forecast, index) =>
                    <div key={index} className="weather-forecast__item">
                        <p className="weather-forecast__day">{moment(forecast.Date).format('ddd')}</p>
                        <p className="weather-forecast__temp">{forecast.Temperature.Minimum.Value} - {forecast.Temperature.Maximum.Value}</p>
                        <p className="weather__forecast__text">{forecast[isDayTime].IconPhrase}</p>
                    </div>
                )}
            </div>
        </div >
    );
}

export default WeatherList;
