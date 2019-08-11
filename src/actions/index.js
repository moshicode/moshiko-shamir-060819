import axios from 'axios'
import { getLocationKey } from './apiActions'
import { saveState } from '../helpers/localStorage'
import store from '../store';

export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addFavorite = (id, name) => {
    console.log(store)
    return (dispatch, getState) => {
        const state = getState()
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                id: id,
                name: name
            }
        })
        console.log(store)
        console.log(state.favoritesData)
        // saveState(state.favoritesData)

        console.log('its work')
        console.log(state.favoritesData)
    }
    // return {
    //     type: 'ADD_FAVORITE',
    //     payload: {
    //         id: id,
    //         name: name
    //     }
    // }
}

export const convertTempUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}

export const toggleDarkMode = () => {
    return {
        type: 'SET_DARK_MODE'
    }
}

export const removeFavorite = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

// export const getLocation = async dispatch => {
//     const res = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete')
//     dispatch({
//         type: 'GET_LOCATION',
//         payload: res.data
//     })
// }

// export const fetchLocation = (cityName) => {
//     return function (dispatch) {
//         axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", {
//             params: {
//                 apikey: '4gI1E7FpGxu7NOag9KZisGMhA1e54aoL',
//                 q: cityName
//             }
//         }).then(res => {
//             dispatch({
//                 type: 'GET_LOCATION', payload: res.data[0]
//             }).then(res =>
//                 Promise.all([
//                     dispatch(fetchDailyForecasts(res.data[0].Key)),
//                     dispatch(fetchCurrentConditions(res.data[0].Key))
//                 ])
//             )
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }

// export const fetchDailyForecasts = (locationKey) => {
//     return function (dispatch) {
//         axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/", {
//             params: {
//                 apikey: '4gI1E7FpGxu7NOag9KZisGMhA1e54aoL',
//                 q: locationKey
//             }
//         }).then(res => {
//             console.log(res.data)
//             dispatch({ type: 'GET_FORECASTS', payload: res.data })
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }

// export const fetchCurrentConditions = (locationKey) => {
//     return function (dispatch) {
//         axios.get("http://dataservice.accuweather.com/currentconditions/v1/", {
//             params: {
//                 apikey: '4gI1E7FpGxu7NOag9KZisGMhA1e54aoL',
//                 q: locationKey
//             }
//         }).then(res => {
//             console.log(res.data)
//             dispatch({ type: 'GET_CURRENT', payload: res.data })
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }

// APIS
// 4gI1E7FpGxu7NOag9KZisGMhA1e54aoL
// DVaSHCZ2oK98ZriCAWD9hnT7V0jxRO9g
// Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS
// dWD7IznmsGfuKaKFufT5l9vOGUgNiiQG
// sJTf7TBlualDqAsfKaTUgVv67u3qxjeh
// ISveHERc8tUTm49Y9Kt4QmqNWFgqkp80
// 9oUg1Ge7VpIOYzZbin0yfApxj8ASG8dN
// srRLeAmTroxPinDG8Aus3Ikl6tLGJd94