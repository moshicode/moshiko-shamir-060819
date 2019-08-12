// const initialState = {
//     location: {
//         Key: '',
//         LocalizedName: ''
//     },
//     forecasts: [],
//     currentWeather: {}
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_WEATHER':
//             return {
//                 ...state,
//                 forecasts: action.forecasts.data.DailyForecasts,
//                 currentWeather: action.currentWeather.data[0]
//                 // forecasts: action.forecasts,
//                 // location: action.payload.filterLocation,
//                 // forecasts: action.payload.res[0].data.DailyForecasts,
//                 // currentWeather: action.payload.res[1].data[0]
//             }
//         case 'FETCH_LOCATION':
//             return {
//                 ...state,
//                 location: action.payload
//             }
//         case 'FETCH_FORECASTS':
//             return {
//                 ...state,
//                 forecasts: action.payload
//             }
//         case 'FETCH_CURRENT_WEATHER':
//             return {
//                 ...state,
//                 currentWeather: action.payload
//             }
//         default:
//             return state
//     }
// }