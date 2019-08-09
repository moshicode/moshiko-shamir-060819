import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'


function WeatherList() {
    const dailyForecasts = useSelector(state => state.weatherData.forecasts.DailyForecasts)
    const dispatch = useDispatch()
    return (
        <div className="weather-forecast container">
            <div className="weather-forecast__list">
                <div className="weather-forecast__item">
                    <p>SUN</p>
                    <p>RAINY</p>
                    <p>23</p>
                </div>
                <div className="weather-forecast__item">
                    <p>SUN</p>
                    <p>RAINY</p>
                    <p>23</p>
                </div>
                <div className="weather-forecast__item">
                    <p>SUN</p>
                    <p>RAINY</p>
                    <p>23</p>
                </div>
                <div className="weather-forecast__item">
                    <p>SUN</p>
                    <p>RAINY</p>
                    <p>23</p>
                </div>
                <div className="weather-forecast__item">
                    <p>SUN</p>
                    <p>RAINY</p>
                    <p>23</p>
                </div>
            </div>

            {/* {dailyForecasts.map((daily, index) =>
            console.log(dailyForecasts)
                <div key={index}>
                    {daily.Date}
                </div>
            )} */}
        </div>
    );
}

export default WeatherList;
