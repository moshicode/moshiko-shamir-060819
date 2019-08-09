import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addFavorite, removeFavorite } from '../actions'
import SearchLocation from './SearchLocation'
import WeatherList from './WeatherList'
import Hero from './Hero'

// import SearchInput from './SearchInput'

const Home = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    console.log(useSelector(state => state))

    return (
        <div className="home" >
            <Hero />


            {/* <SearchLocation /> */}
            <WeatherList />

            {/* <SearchInput />
            <h1>Homepage</h1>
            <p>Counter {counter}</p>

            <button onClick={() => dispatch(removeFavorite(1))}>Remove Favorite</button>
            <button onClick={() => dispatch(addFavorite(5, 'Moshiko'))}>Add Favorite</button>
            <button onClick={() => dispatch(increment())}>+5</button>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button> */}
        </div>
    )
}


export default Home