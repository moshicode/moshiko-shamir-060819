import { combineReducers } from 'redux'

import counterReducer from './counter'
import locationReducer from './fetch_location'

/// FINISH
import apiReducer from './api'
import favoritesReducer from './favorites'
import temperatureReducer from './celsius'
import darkModeReducer from './darkmode'

const rootReducers = combineReducers({
    // counter: counterReducer,
    // location: locationReducer,
    favoritesData: favoritesReducer,
    weatherData: apiReducer,
    isCelsius: temperatureReducer,
    isDark: darkModeReducer
})

export default rootReducers