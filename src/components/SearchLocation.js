import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getLocationKey } from '../actions/apiActions'


const SearchLocation = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch()

    const onChange = async (e) => {
        const value = e.target.value
        setText(value)
    }

    const onSubmit = async (e) => {
        if (text !== '') {
            await dispatch(getLocationKey(text))
            await setText('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault()
            e.target.blur()
            onSubmit()
        }
    }

    return (
        <div className="hero__search search">
            <input
                className="search__input"
                type="text"
                placeholder="Search By City..."
                onChange={onChange}
                value={text}
                onKeyPress={handleKeyPress}
            />
            <button
                className="search__btn"
                onClick={onSubmit}
                onKeyPress={handleKeyPress}
            >
                <i className="fas fa-search"></i>
            </button>
        </div>
    )

}

export default SearchLocation

// class SearchLocation extends Component {
//     constructor() {
//         super()
//         this.state = {
//             text: ''
//         }
//     }

//     onChange = (e) => {
//         let value = e.target.value
//         this.setState({
//             text: value
//         })
//     }

//     onSubmit = (e) => {
//         if (this.state.text !== '') {
//             console.log('dispatch to redux')
//             console.log(this.state.text)
//             this.setState({ text: '' })
//         }
//     }

//     handleKeyPress = (e) => {
//         if (e.charCode === 13 || e.key === 'Enter') {
//             this.onSubmit()
//         }
//     }

//     render() {
//         return (
//             <div className="search">
//                 <input
//                     className="search__input"
//                     type="text"
//                     placeholder="search location"
//                     onChange={this.onChange}
//                     value={this.state.text}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button
//                     className="search__btn"
//                     onClick={this.onSubmit}
//                     onKeyPress={this.handleKeyPress}
//                 >Search</button>
//             </div>
//         );
//     }
// }

// export default SearchLocation;