import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'

import axios from 'axios'

function Favorites() {
    const [tempData, setData] = useState([]);

    const isMetric = useSelector(state => state.isCelsius)
    const favorites = useSelector(state => state.favoritesData)
    const dispatch = useDispatch()

    // const getCurrentWeather = async () => {
    //     const currentWeatherData = {}
    //     for (let favorite of favorites) {
    //         const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}?apikey=9oUg1Ge7VpIOYzZbin0yfApxj8ASG8dN`)
    //         currentWeatherData[favorite.id] = await response.data[0]
    //     }
    //     return await currentWeatherData
    // }

    return (
        <div className="favorites container">
            {favorites.map((favorite, index) =>
                <div
                    className="favorites__item"
                    key={index}>
                    <p>{favorite.name}</p>
                    {/* <p>{tempData[favorite].WeatherText}</p>
                    <p>{tempData[favorite.id].Temperature[isMetric ? 'Metric' : 'Imperial'].Value}{isMetric ? `℃` : '℉'}}</p> */}


                    <button
                        onClick={() => dispatch(removeFavorite(favorite.id))}>
                        Remove Favorite
                    </button>
                </div>
            )}
        </div>
    );
}

export default Favorites;
