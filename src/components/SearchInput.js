import React, { useState } from 'react'
import axios from 'axios'
import { getSuggestions, resetSuggestions, getLocation, getWeather, getAllWeather } from '../actions/weatherActions'
import { useSelector, useDispatch } from 'react-redux'

const SearchInput = () => {
    const location = useSelector(state => state.suggestions)
    const dispatch = useDispatch()

    const [state, setState] = useState({ text: '', suggestionSelected: '' });

    const handleChange = e => {
        const value = e.target.value
        setState({ text: value })
        if (value.length > 0) {
            dispatch(getSuggestions(value))
        }
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            // e.target.blur() ! to check if work on mobile for android keyboards
            handleSubmit()
        }
    }

    const handleSubmit = e => {
        const cityName = state.text
        if (state.text === state.suggestionSelected) {
            dispatch(getLocation(cityName))
        } else {
            console.log(false)
        }
        setState({ text: '' })
        dispatch(resetSuggestions())
    }

    const suggestionSelected = item => {
        setState({ text: item, suggestionSelected: item })
        dispatch(resetSuggestions())
    }

    const renderSuggestions = () => {
        if (location.length === 0) {
            return null
        }

        return (
            <ul className="search__results">
                {location.map((item, index) =>
                    <li
                        key={index}
                        onClick={() => suggestionSelected(item)}
                    >{item}
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
                value={state.text}
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
