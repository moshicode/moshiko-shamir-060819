import axios from 'axios'

const API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
const ROOT_URL = 'https://dataservice.accuweather.com'



// Get array of locations suggestions with name & key
export const getSuggestions = cityName => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    dispatch({ type: 'GET_SUGGESTIONS', payload: response.data.map(suggest => ({ cityName: suggest.LocalizedName, key: suggest.Key })) })
}

// Set location name & key - only if it select from the locations suggestions
export const setLocationBySuggestion = location => {
    return {
        type: 'SET_LOCATION_BY_SUGGESTION',
        payload: location
    }
}

// Set text value from the search box
export const setSuggestValue = text => {
    return {
        type: 'SET_TEXT',
        payload: text
    }
}

// Reset suggestions and text value to default
export const resetSuggestions = () => {
    return {
        type: 'RESET_SUGGESTIONS'
    }
}

// Get location key by name
export const getLocationKey = cityName => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    await dispatch({ type: 'GET_LOCATION', payload: { cityName: response.data[0].LocalizedName, key: response.data[0].Key } })
}

export const getLocation = cityName => async (dispatch, getState) => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    console.log(response.data[0])

    await dispatch({ type: 'GET_LOCATION', payload: { cityName: response.data[0].LocalizedName, key: response.data[0].Key } })
    await dispatch(getWeather(getState().location.key))
}

// Get All Weather details by getCurrentWeather() and getDailyForecasts()
export const getWeather = locationKey => async dispatch => {
    await dispatch(getCurrentWeather(locationKey))
    await dispatch(getDailyForecasts(locationKey))
    dispatch({ type: 'TOGGLE_LOADING' })
}

// Get Current Weather by location Key
export const getCurrentWeather = locationKey => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
    dispatch({ type: 'GET_CURRENT_WEATHER', payload: response.data[0] })
}

// Get DailyForecasts by location Key
export const getDailyForecasts = locationKey => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`)
    dispatch({ type: 'GET_DAILY_FORECASTS', payload: response.data.DailyForecasts })
}
