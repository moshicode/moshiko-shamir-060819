import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'
import axios from 'axios'
import { converter } from '../helpers/converter';

function Favorites() {
    const favorites = useSelector(state => state.favoritesData)
    const isMetric = useSelector(state => state.isMetric)
    const dispatch = useDispatch()

    const [favs, setFav] = useState([]);
    const [isFetching, setFetch] = useState(true)

    useEffect(() => {
        fetchFavorites()
    }, []);

    const fetchFavorites = async () => {
        setFetch(true)
        const tempFavorites = {}
        for await (let favorite of favorites) {
            const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}?apikey=gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII&getphotos=true`)
            tempFavorites[favorite.id] = response.data[0]
        }
        setFav(tempFavorites)
        await setFetch(false)
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
                    <p>{favs[favorite.id].WeatherText}</p>
                    <p>{isMetric ? `${favs[favorite.id].Temperature.Metric.Value}\xB0C` : converter(favs[favorite.id].Temperature.Metric.Value)}</p>
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
