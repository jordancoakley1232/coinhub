import React from 'react';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-items">
                <div className="logo">
                    <h2>CoinHub</h2>
                </div>
                <div className="categories">
                    <div className="category"><a href="#">Prices</a></div>
                    <div className="category"><a href="#">Learn</a></div>
                    <div className="category"><a href="#">Individuals</a></div>
                    <div className="category"><a href="#">Business</a></div>
                    <div className="category"><a href="#">Developers</a></div>
                    <div className="category"><a href="#">Company</a></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
