import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'


function Favorites() {

    // const isMetric = useSelector(state => state.isCelsius)
    const favorites = useSelector(state => state.favoritesData)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     favorites.forEach(favorite =>
    //         dispatch(setFavoriteWeather(favorite.id))
    //     )
    // }, []);

    return (
        <div className="favorites container">
            {favorites.map((favorite, index) =>
                <div
                    className="favorites__item"
                    key={index}>
                    <p>{favorite.name}</p>
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
