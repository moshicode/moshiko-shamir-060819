import { combineReducers } from 'redux'

import favoritesReducer from './favorites'
import temperatureReducer from './celsius'
import darkModeReducer from './darkmode'
import loadingReducer from './isLoading'

import weatherReducer from './weather'
import locationReducer from './location'
import suggestionsReducer from './suggestions'

const rootReducers = combineReducers({
    favoritesData: favoritesReducer,
    isCelsius: temperatureReducer,
    isDark: darkModeReducer,
    isLoading: loadingReducer,
    weather: weatherReducer,
    location: locationReducer,
    suggestions: suggestionsReducer,
})

export default rootReducers