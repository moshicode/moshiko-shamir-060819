import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'
import { getCurrentWeather } from '../actions/weatherActions'
import axios from 'axios'

function Favorites() {
    // const isMetric = useSelector(state => state.isCelsius)
    const favorites = useSelector(state => state.favoritesData)
    const dispatch = useDispatch()

    const [fav, setFav] = useState([])
    const [isFetching, setFetch] = useState(true)

    useEffect(() => {
        fetchFavorites()
    }, []);

    const fetchFavorites = async () => {
        for await (let favorite of favorites) {
            const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}?apikey=gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII&getphotos=true`)
            await setFav({ [favorite.id]: response.data[0] })
        }
        setFetch(false)
    }

    if (isFetching) {
        return (
            <div className="favorites container">loading...</div>
        )
    }
    return (
        <div className="favorites container">
            {favorites.map((favorite, index) =>
                <div
                    className="favorites__item"
                    key={index}>
                    <p>{favorite.name}</p>
                    <p>{fav[favorite.id].WeatherText}</p>
                    <p>{fav[favorite.id].Temperature.Metric.Value}℃</p>
                    {console.log(fav[favorite.id])}
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
