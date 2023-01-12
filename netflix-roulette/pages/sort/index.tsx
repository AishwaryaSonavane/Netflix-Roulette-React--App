import { useRouter } from "next/router";
import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from '../../styles/Movie-sort.module.css';

function MovieSort() {
    const router = useRouter();
    const sortMovies = (option: string) => {
        router.push(`/sort/${option}`);
    }

    return(
        <div className={styles.sort}>
            <span>SORT BY</span>
            <Select
                labelId="label" 
                id="select"
                size="small"
                className={styles.options}
                data-testid="select-option"
                defaultValue='release_date'
                onChange={e => sortMovies(e.target.value)}
            >
                <MenuItem value='release_date'>RELEASE DATE</MenuItem>
                <MenuItem value='vote_average'>RATING</MenuItem>
            </Select>
        </div>
    )
} 


export default MovieSort;