import React from 'react'
import { Link } from 'react-router-dom'


const Header = () =>
    <header className="header">
        <div className="container">
            <nav className="header__navbar">
                <h1 className="header__logo">
                    <Link to="/">Weather App</Link>
                </h1>
                <ul className="header__list">
                    <li>
                        <Link to="/favorites">
                            <i class="fas fa-heart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

export default Header