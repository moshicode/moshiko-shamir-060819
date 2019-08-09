// let initialState = {}

const initialState = {
    locationKey: 215854,
    forecasts: {},
    currentWeather: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOCATION':
            console.log(action)
            return {
                ...state,
                locationKey: action.payload
            }
        case 'FETCH_FORECASTS':
            return {
                ...state,
                forecasts: action.payload
            }
        case 'FETCH_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: action.payload
            }
        default:
            return state
    }
}