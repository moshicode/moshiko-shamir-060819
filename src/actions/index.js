import axios from 'axios'
const API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
const ROOT_URL = 'https://dataservice.accuweather.com'


// Favorites
export const addFavorite = (id, name) => {
    return {
        type: 'ADD_FAVORITE',
        payload: {
            id: id,
            name: name
        }
    }
}

export const setFavoriteWeather = id => async dispatch => {

    const response = await axios.get(`${ROOT_URL}/currentconditions/v1/${id}?apikey=${API_KEY}&getphotos=true`)
    console.log(response)
    dispatch({ type: 'UPDATE_FAVORITE', payload: response.data[0] })
}


export const removeFavorite = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

// Loading

export const toggleLoading = () => {
    return {
        type: 'TOGGLE_LOADING'
    }
}

// Convert temp

export const convertTempUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}

// Dark Mode

export const toggleDarkMode = () => {
    return {
        type: 'SET_DARK_MODE'
    }
}
