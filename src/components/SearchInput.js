import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSuggestions, resetSuggestions, getLocationKey, setLocationBySuggestion, getWeather, setSuggestValue } from '../actions/weatherActions'

const SearchInput = () => {
    const suggestions = useSelector(state => state.suggestions)
    const location = useSelector(state => state.location)
    const dispatch = useDispatch()

    const handleChange = e => {
        const value = e.target.value
        dispatch(setSuggestValue(value))
        if (value.length > 0) {
            dispatch(getSuggestions(value))
        }
    }

    const handleSubmit = async e => {
        if (suggestions.text.length > 0 && suggestions.locations.length > 0) {
            await dispatch(getLocationKey(suggestions.text))
            await dispatch(getWeather(location.key))
            dispatch(resetSuggestions())
        }
    }

    const handleKeyPress = async (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            await handleSubmit()
        }
    }

    const suggestionSelected = async locationRawData => {
        await dispatch(setLocationBySuggestion(locationRawData))
        await dispatch(getWeather(locationRawData.key))
        await dispatch(resetSuggestions())
    }

    const renderSuggestions = () => {
        if (suggestions.locations.length === 0 || suggestions.text.length === 0) {
            return null
        }

        return (
            <ul className="search__results results">
                {suggestions.locations.map((location, index) =>
                    <li
                        key={index}
                        onClick={() => suggestionSelected(location)}
                    >
                        <span>{location.cityName}</span><span className="search__label">{location.country}</span>
                    </li>)
                }
            </ul>
        )
    }

    return (
        <div className="hero__search search">
            <input
                className="search__input"
                type="text"
                placeholder="Search By City..."
                onChange={handleChange}
                value={suggestions.text}
                onKeyPress={handleKeyPress}
            />
            <button
                className="search__btn"
                onClick={(e) => handleSubmit()}
                onKeyPress={handleKeyPress}
            >
                <i className="fas fa-search"></i>
            </button>
            {renderSuggestions()}
        </div>
    )
}

export default SearchInput
