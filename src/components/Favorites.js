import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../actions'


function Favorites() {
    const favorites = useSelector(state => state.favoritesData)
    const dispatch = useDispatch()
    return (
        <div className="favorites">
            <div className="container">
                {favorites.map((favorite, index) =>
                    <div key={index}>
                        {favorite.name}
                        <button
                            onClick={() => dispatch(removeFavorite(favorite.id))}>
                            Remove Favorite
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favorites;
