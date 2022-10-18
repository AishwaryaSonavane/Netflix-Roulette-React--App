import React from "react";
import './Header-component.css';
import AddMovie from './add-movie/Add-movie-component';
import Search from './search/Search-component';

function Header() {
    return(
        <div>
            <div className="header">
            </div>
            <AddMovie />
            <h1 className="find-movie-title">FIND YOUR MOVIE</h1>
            <Search />
        </div>
    )
}

export default Header; 