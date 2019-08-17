import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSuggestions, resetSuggestions, getLocation, setLocationBySuggestion, getWeather, setSuggestValue } from '../actions/weatherActions'
// import { throttle } from 'lodash';


const SearchInput = () => {
    const suggestions = useSelector(state => state.suggestions)
    // const location = useSelector(state => state.location)
    const dispatch = useDispatch()

    const handleChange = async e => {
        const value = e.target.value
        await dispatch(setSuggestValue(value))
        if (suggestions.isFetching === 0) {
            await dispatch(getSuggestions(value))
        }
    }


    const handleSubmit = async e => {
        if (suggestions.text.length !== 0 && suggestions.isFetching === 0 && suggestions.locations.length > 0) {
            // await dispatch(getLocationKey(suggestions.text))
            // console.log(suggestions.text)
            // console.log(suggestions.locations[0].cityName)
            await dispatch(getLocation(suggestions.locations[0].cityName))
            await dispatch(resetSuggestions())
        }
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            handleSubmit()
        }
    }

    const suggestionSelected = locationRawData => {
        dispatch(setLocationBySuggestion(locationRawData))
        dispatch(getWeather(locationRawData.key))
        dispatch(resetSuggestions())
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

    if (suggestions.locations)

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
                    onClick={handleSubmit}
                    onKeyPress={handleKeyPress}
                >
                    <i className="fas fa-search"></i>
                </button>
                {renderSuggestions()}
            </div>
        )
}

export default SearchInput
