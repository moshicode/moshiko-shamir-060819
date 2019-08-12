import axios from 'axios'

const API_KEY = 'gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII'
const ROOT_URL = 'https://dataservice.accuweather.com'

export const getSuggestions = cityName => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    console.log(response)
    dispatch({ type: 'GET_SUGGESTIONS', payload: response.data.map(suggest => suggest.LocalizedName) })
}

export const resetSuggestions = () => {
    return {
        type: 'RESET_SUGGESTIONS'
    }
}

export const getLocation = cityName => async (dispatch, getState) => {
    const response = await axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    await dispatch({ type: 'GET_LOCATION', payload: response.data[0] })
    await dispatch(getWeather(getState().location.Key))
}

export const resetLocation = () => {
    return {
        type: 'RESET_LOCATION'
    }
}

export const getWeather = locationKey => async dispatch => {
    await dispatch(getCurrentWeather(locationKey))
    await dispatch(getDailyForecasts(locationKey))
    dispatch({ type: 'FINISH_LOADING' })
}


export const getAllWeather = cityName => async (dispatch, getState) => {
    await dispatch(getCurrentWeather(getState().location.Key))
    await dispatch(getDailyForecasts(getState().location.Key))
    dispatch({ type: 'FINISH_LOADING' })
}

export const getCurrentWeather = locationKey => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
    console.log(response)
    dispatch({ type: 'GET_CURRENT_WEATHER', payload: response.data[0] })
}

export const getDailyForecasts = locationKey => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`)
    console.log(response)
    dispatch({ type: 'GET_DAILY_FORECASTS', payload: response.data.DailyForecasts })
}
