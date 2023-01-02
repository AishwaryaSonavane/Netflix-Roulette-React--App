import { useRouter } from "next/router";
import React from "react";
import styles from '../../styles/Movie-sort.module.css';

function MovieSort(props) {
    const router = useRouter();
    const sortMovies = (option) => {
        router.push(`/sort/${option}`);
    }

    return(
        <div className={styles.sort}>
            <span>SORT BY</span>
            <select className={styles.options} data-testid="select-option" onChange={e => sortMovies(e.target.value)}>
                <option value='release_date'>RELEASE DATE</option>
                <option value='vote_average'>RATING</option>
            </select>
        </div>
    )
} 


export default MovieSort;