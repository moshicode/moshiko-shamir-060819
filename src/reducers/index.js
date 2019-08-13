import { combineReducers } from 'redux'

/// FINISH
import favoritesReducer from './favorites'
import temperatureReducer from './celsius'
import darkModeReducer from './darkmode'
import loadingReducer from './isLoading'

import weatherReducer from './weather'
import locationReducer from './location'
import suggestionsReducer from './suggestions'

const rootReducers = combineReducers({
    favoritesData: favoritesReducer,
    // weatherData: apiReducer,
    isCelsius: temperatureReducer,
    isDark: darkModeReducer,
    isLoading: loadingReducer,
    weather: weatherReducer,
    location: locationReducer,
    suggestions: suggestionsReducer,
})

export default rootReducers