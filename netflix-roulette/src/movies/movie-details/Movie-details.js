import React, { useContext } from "react";
import { MovieDetailContext } from "../../App";
import './Movie-details.css';

function MovieDetails() {
    const {value} = useContext(MovieDetailContext);

    const {poster_path, title, release_date, runtime, overview, vote_average} = value;
    return (
        <div className="movie-details">
                    <img className="movie-image" alt={title} src={poster_path}/>
                    <div className="details">
                    <div className="title-rating">
                        <span className="title">{title}</span>
                        <div className="rating"><span>{vote_average}</span></div>
                    </div>    
                   
                    <div className="year-duration">
                        <span>{release_date}</span>
                        <span className="duration">{runtime} min</span>
                    </div>
                    <div className="description">
                        <p>{overview}</p>
                    </div>
                    </div>
        </div>
    )
}

export default MovieDetails;