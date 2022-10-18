import React from 'react';
import './Movies.css';
import MovieGenre from './movie-genre/Movie-genre';

function Movies() {
    return (
        <div className='movies-section'>
            <MovieGenre/>
        </div>
    )
}

export default Movies;