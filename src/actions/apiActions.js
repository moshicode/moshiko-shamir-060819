// import axios from 'axios'
// import store from '../store'
// const API_KEY = 'tVMQYSzC28wxTVhQuMmwqBn5Ukei5K1E'
// const ROOT_URL = 'https://dataservice.accuweather.com'

// export const getAllWeather = cityName => {
//     return (dispatch, getState) => {
//         axios.get(`${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
//             .then(result => {
//                 dispatch({
//                     type: 'FETCH_LOCATION',
//                     payload: result.data[0]
//                 })
//             }).then(() => {
//                 const locationKey = getState().weatherData.location.Key
//                 const getForecasts = axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`)
//                 const getCurrentWeather = axios.get(`${ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
//                 Promise.all([getForecasts, getCurrentWeather])
//                     .then(res =>
//                         dispatch({
//                             type: 'FETCH_WEATHER',
//                             forecasts: res[0],
//                             currentWeather: res[1]
//                         })
//                     ).then(() => {
//                         dispatch({
//                             type: 'FINISH_LOADING'
//                         })
//                     })
//             })
//     }
// }

// export const getDailyForecasts = locationKey => {
//     return (dispatch) => {
//         axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`)
//             .then(res => {
//                 dispatch({
//                     type: 'FETCH_FORECASTS',
//                     payload: res.data.DailyForecasts
//                 })
//             }).catch(err => {
//                 console.log(err);
//             })
//     }
// }

// export const getCurrentWeather = locationKey => {
//     return (dispatch) => {
//         axios.get(`${ROOT_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
//             .then(res => {
//                 let filterRes = { ...res.data[0] }
//                 let { IsDayTime, LocalObservationDateTime, Photos, Temperature, WeatherIcon, WeatherText } = filterRes
//                 dispatch({
//                     type: 'FETCH_CURRENT_WEATHER',
//                     payload: {
//                         IsDayTime,
//                         LocalObservationDateTime,
//                         Photos: Photos[0].LandscapeLink.replace("_L_L", "_L_XXL"),
//                         Temperature: Temperature.Metric.Value,
//                         WeatherIcon,
//                         WeatherText
//                     }
//                 })
//             }).catch(err => {
//                 console.log(err);
//             })
//     }
// }

