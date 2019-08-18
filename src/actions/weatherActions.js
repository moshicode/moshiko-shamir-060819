import axios from 'axios'

const API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
const ROOT_URL = 'https://dataservice.accuweather.com'

// Get array of locations suggestions with RAW DATA { cityName, key, country }
export const getSuggestions = cityName => async dispatch => {
    if (cityName !== '') {
        await dispatch({ type: 'GET_SUGGESTIONS_REQ' })
        const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
        await dispatch({ type: 'GET_SUGGESTIONS_RES', payload: response.data.map(suggest => ({ cityName: suggest.LocalizedName, key: suggest.Key, country: suggest.Country.LocalizedName })) })
    }
}

// Set location RAW DATA { cityName, key, country} - only if it select from the locations suggestions
export const setLocationBySuggestion = location => {
    return {
        type: 'SET_LOCATION',
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

// Get location RAW DATA { key, cityName } By GEO LOCATION (if accepted) => after: auto excute getWeather() 
export const getLocationKeyByGEO = (latitude, longitude) => async (dispatch, getState) => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/geoposition/search?q=${latitude},${longitude}&apikey=${API_KEY}`)
    await dispatch({ type: 'SET_LOCATION', payload: { cityName: response.data.ParentCity.LocalizedName, key: response.data.ParentCity.Key } })
    await dispatch(getWeather(getState().location.key))
}

// Get location RAW DATA { key, cityName} by city name => after: auto excute getWeather() 
export const getLocation = cityName => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    await dispatch({ type: 'SET_LOCATION', payload: { cityName: response.data[0].LocalizedName, key: response.data[0].Key } })
    await dispatch(getWeather(response.data[0].Key))
}

// Get All Weather details by getCurrentWeather() and getDailyForecasts()
export const getWeather = locationKey => async dispatch => {
    await dispatch(getCurrentWeather(locationKey))
    await dispatch(getDailyForecasts(locationKey))
    await dispatch({ type: 'TOGGLE_LOADING' })
}


// Get Current Weather by location Key
export const getCurrentWeather = (locationKey, isFavorite = false) => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
    await dispatch({ type: 'GET_CURRENT_WEATHER', payload: response.data[0] })
}

// Get DailyForecasts by location Key
export const getDailyForecasts = locationKey => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`)
    await dispatch({ type: 'GET_DAILY_FORECASTS', payload: response.data.DailyForecasts })
}
