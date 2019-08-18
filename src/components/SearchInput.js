import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSuggestions, resetSuggestions, getLocation, setLocationBySuggestion, getWeather, setSuggestValue } from '../actions/weatherActions'
// import { throttle } from 'lodash';


const SearchInput = () => {
    const suggestions = useSelector(state => state.suggestions)
    const dispatch = useDispatch()

    const handleChange = async e => {
        const value = e.target.value
        dispatch(setSuggestValue(value))
        if (value.length > 0) {
            await dispatch(getSuggestions(value))
        } else {
            dispatch(resetSuggestions())
        }
    }

    const handleSubmit = async e => {
        if (suggestions.text.length > 0 && suggestions.isFetching === 0 && suggestions.locations.length > 0) {
            await dispatch(getLocation(suggestions.locations[0].cityName))
            dispatch(resetSuggestions())
        }
    }

    const handleKeyPress = async e => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            await handleSubmit()
        }
    }

    const labelButton = () => {
        if (suggestions.locations.length > 0 && suggestions.text.length > 0) {
            return (
                <button
                    className="search__btn"
                    onClick={() => dispatch(resetSuggestions())}
                >
                    <i className="fas fa-times"></i>
                </button>
            )
        }
        return (
            <button
                className="search__btn"
                onClick={handleSubmit}>
                <i className="fas fa-search"></i>
            </button>
        )

    }

    const suggestionSelected = async locationRawData => {
        dispatch(resetSuggestions())
        await dispatch(setLocationBySuggestion(locationRawData))
        await dispatch(getWeather(locationRawData.key))
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
                        onClick={async () => await suggestionSelected(location)}
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
            {labelButton()}
            {renderSuggestions()}
        </div>
    )
}

export default SearchInput
