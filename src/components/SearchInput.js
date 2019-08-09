import React, { Component } from 'react'
import axios from 'axios'
// import React, { useState, useRef, useEffect, useCallback } from 'react';


// import { useSelector, useDispatch } from 'react-redux'
// import { fetchLocation } from '../actions'

// const SearchInput = () => {
//     const location = useSelector(state => state.location)
//     const dispatch = useDispatch()


//     const [state, setState] = useState({ text: '' });

//     const onChange = async e => {
//         setState({ text: e.target.value })
//         console.log(state)
//         // await dispatch(fetchLocation(state.text))
//     }

//     console.log(location)
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search City"
//                 onChange={async (e) => await dispatch(fetchLocation(e.target.value))}
//             />
//             <button onClick={async () => await dispatch(fetchLocation(state.text))}>Fetch API</button>
//         </div>
//     )
// }

// export default SearchInput

export default class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.items = [
            {
                locationkey: '132',
                name: 'Tel Aviv'
            },
            {
                locationkey: '140',
                name: 'Jerusalem'
            }
        ]

        this.state = {
            items: [],
            suggestions: [],
            text: '',
            selected: null

        }
    }

    onChange = async (e) => {
        const value = e.target.value
        let suggestions = []
        if (value.length > 0) {
            await axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", {
                params: {
                    apikey: '4gI1E7FpGxu7NOag9KZisGMhA1e54aoL',
                    q: value
                }
            }).then(response => {
                this.setState({ items: response.data })
            })
            const regex = await new RegExp(`^${value}`, 'i')
            suggestions = await this.state.items.filter(v => regex.test(v.LocalizedName))
        }

        this.setState({
            suggestions,
            text: value
        })
    }

    suggestionSelected = value => {
        this.setState({
            text: value.LocalizedName,
            selected: value.Key,
            suggestions: []
        })
    }

    renderSuggestions = () => {
        const { suggestions } = this.state
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul>
                {suggestions.map((item, index) =>
                    <li
                        key={index}
                        onClick={() => this.suggestionSelected(item)}
                    >{item.LocalizedName}
                    </li>
                )}
            </ul>
        )
    }

    render() {
        return (
            <div className="autocomplete-wrapper">
                <div className="autocomplete">
                    <input
                        type="text"
                        placeholder="Write Location"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    {this.renderSuggestions()}
                </div>
            </div>
        )
    }
}