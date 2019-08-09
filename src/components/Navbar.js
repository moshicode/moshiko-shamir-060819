import React from 'react'

const Navbar = () =>
    <div className="navbar">
        <h1>Weather app</h1>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>
        </nav>
    </div>


export default Navbar