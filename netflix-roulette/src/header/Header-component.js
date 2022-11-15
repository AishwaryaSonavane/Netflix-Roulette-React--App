import React, { useContext } from "react";
import './Header-component.css';
import AddMovie from './add-movie/Add-movie-component';
import Search from './search/Search-component';
import MovieDetails from "../movies/movie-details/Movie-details";
import { MovieDetailContext } from "../App";

function Header() {
    const {value} = useContext(MovieDetailContext);

    return(
        <>
            {value ? <MovieDetails /> : 
                <>
                    <div className="header">
                    </div>
                    <AddMovie />
                    <h1 className="header__title">FIND YOUR MOVIE</h1>
                    <Search />
                </>
            }            
        </>
    )
}

export default Header; 