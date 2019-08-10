import axios from 'axios'
import image from '../images/background-image.jpg'

const API_KEY = '9oUg1Ge7VpIOYzZbin0yfApxj8ASG8dN'

export const getLocationKey = cityName => {
    return (dispatch) => {
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
            .then(res => {
                let filterRes = { ...res.data[0] }
                let { Key, LocalizedName } = filterRes

                dispatch({
                    type: 'FETCH_LOCATION',
                    payload: {
                        Key,
                        LocalizedName
                    }
                })
                dispatch(getDailyForecasts(Key))
                dispatch(getCurrentWeather(Key))
            }).catch(err => {
                console.log(err);
            })
    }
}


export const getDailyForecasts = locationKey => {
    return (dispatch) => {
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_FORECASTS',
                    payload: res.data.DailyForecasts
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const getCurrentWeather = locationKey => {
    return (dispatch) => {
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&getphotos=true`)
            .then(res => {
                let filterRes = { ...res.data[0] }
                let { IsDayTime, LocalObservationDateTime, Photos = { image }, Temperature, WeatherIcon, WeatherText } = filterRes

                dispatch({
                    type: 'FETCH_CURRENT_WEATHER',
                    payload: {
                        IsDayTime,
                        LocalObservationDateTime,
                        Photos: Photos[0].LandscapeLink.replace("_L_L", "_L_XXL"),
                        Temperature,
                        WeatherIcon,
                        WeatherText
                    }
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

