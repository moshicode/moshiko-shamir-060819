import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../actions'


const Header = () => {
    const dispatch = useDispatch()

    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <h1 className="header__logo">
                        <Link to="/">Weather App</Link>
                    </h1>
                    <ul className="header__list">
                        <li>
                            <Link to="/favorites">
                                <i className="fas fa-heart"></i>
                            </Link>
                        </li>
                        <li>
                            <button onClick={(e) => dispatch(toggleDarkMode())(e.target.blur)}><i className="fas fa-adjust"></i></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header