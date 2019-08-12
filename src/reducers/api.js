const initialState = {
    location: {
        Key: '215854',
        LocalizedName: 'Tel Aviv'
    },
    forecasts: [],
    currentWeather: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOCATION':
            return {
                ...state,
                location: action.payload
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