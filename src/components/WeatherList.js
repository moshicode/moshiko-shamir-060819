import React from 'react';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'
// import { converter } from '../helpers/converter'

function WeatherList() {

    const dailyForecasts = useSelector(state => state.weather.forecasts)
    const currentWeather = useSelector(state => state.weather.current)
    const location = useSelector(state => state.location)
    const favorites = useSelector(state => state.favoritesData)
    // const isMetric = useSelector(state => state.isMetric)
    const dispatch = useDispatch()
    const isDayTime = currentWeather.IsDayTime ? 'Day' : 'Night'

    return (
        <div className="weather-forecast container">
            <div className="weather-current__today">
                <h2 className="weather-current__title">{location.cityName}</h2>
                <div className="weather-forecast__current">
                    <p className="weather-forecast__day">Today</p>
                    <p className="weather-forecast__text">{currentWeather.WeatherText}</p>
                    {/* {isMetric ? converter(currentWeather.Temperature.Metric.Value) : converter(currentWeather.Temperature.Metric.Value)} */}

                    <p className="weather-forecast__temp">{currentWeather.Temperature.Metric.Value}℃</p>
                </div>
                {favorites.some(({ id }) => id === location.key) ?
                    <button className="weather-current__btn" onClick={() => dispatch(
                        removeFavorite(location.key, location.cityName))}>Unfollow
                </button> :
                    <button className="weather-current__btn" onClick={() => dispatch(
                        addFavorite(location.key, location.cityName))}>Follow
                </button>
                }

            </div>

            <div className="weather-forecast__list">
                {dailyForecasts.map((forecast, index) =>
                    <div key={index} className="weather-forecast__item">
                        <p className="weather-forecast__day">{moment(forecast.Date).format('ddd')}</p>
                        <p className="weather-forecast__icon"><i className={`wi icon-accu${forecast[isDayTime].Icon}`}></i></p>

                        {/* {isMetric ? converter(forecast.Temperature.Minimum.Value) : converter(forecast.Temperature.Minimum.Value, forecast.Temperature.Maximum.Value, true)} */}
                        <p className="weather-forecast__temp">{forecast.Temperature.Minimum.Value}℃ - {forecast.Temperature.Maximum.Value}℃</p>
                        <p className="weather__forecast__text">{forecast[isDayTime].IconPhrase}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherList;
