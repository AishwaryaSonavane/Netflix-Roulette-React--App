import React from "react";
import { useSelector } from "react-redux";
import styles from '../../styles/Movie-details.module.css';
import { getSelectedMovie } from "../../reducers/rootReducer";
import { useRouter } from "next/router";
import Movies from "./Movies";

function MovieDetails() {
    const selectedMovie = useSelector(getSelectedMovie);
    const router = useRouter();

    const {poster_path, title, release_date, runtime, overview, vote_average} = selectedMovie;
    return (
        <> 
            <div className={styles.details}>
                <button onClick={() => router.back()}>Back</button>
                <div className={styles.movie_details}>
                    <img className={styles.movie_image} alt={title} src={poster_path}
                    sizes="(min-width: 66em) 33vw,
                    (min-width: 44em) 50vw,
                    100vw"
                    width="300"
                    height="200"
                    loading="lazy"/>
                    <div className={styles.movie_detail}>
                        <div className={styles.title_rating}>
                            <span data-testid="title" className={styles.title}>{title}</span>
                            <div className={styles.rating}><span>{vote_average}</span></div>
                        </div>    
                        
                        <div className={styles.year_duration}>
                            <span>{release_date}</span>
                            <span className={styles.duration}>{runtime} min</span>
                        </div>
                        <div className={styles.description}>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>    
            <Movies/>
        </>  
    )
}

export default MovieDetails;