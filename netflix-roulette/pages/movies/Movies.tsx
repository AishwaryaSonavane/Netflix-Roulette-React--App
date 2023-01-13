import React from 'react';
import MovieGenre from '../genre';
import styles from '../../styles/Movies.module.css';

function Movies() {
    return (
        <div className={styles.movies_section}>
            <MovieGenre/>
        </div>
    )
}

export default Movies;