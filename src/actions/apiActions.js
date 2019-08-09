import axios from 'axios'

const API_KEY = 'dWD7IznmsGfuKaKFufT5l9vOGUgNiiQG'

export const getLocationKey = cityName => {
    return (dispatch) => {
        axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", {
            params: {
                apikey: 'dWD7IznmsGfuKaKFufT5l9vOGUgNiiQG',
                q: cityName
            }
        }).then(res => {
            console.log(res.data[0].Key)
            dispatch({
                type: 'FETCH_LOCATION',
                payload: res.data[0].Key
            })
            dispatch(getDailyForecasts(res.data[0].Key))
            dispatch(getCurrentWeather(res.data[0].Key))
        }).catch(err => {
            console.log(err);
        })
    }
}


export const getDailyForecasts = locationKey => {
    return (dispatch) => {
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: 'FETCH_FORECASTS',
                    payload: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const getCurrentWeather = locationKey => {
    return (dispatch) => {
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_CURRENT_WEATHER',
                    payload: res.data[0]
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

