import React, { useContext } from "react";
import { MovieDetailContext } from "../../App";
import './Movie-details.css';

function MovieDetails() {
    const {value} = useContext(MovieDetailContext);

    const {image_url, title, year, duration, description, rating} = value;
    return (
        <div className="movie-details">
                    <img className="movie-image" src={require(`../../assets/${image_url}`)}/>
                    <div className="details">
                    <h3>{title}</h3>
                    <div className="year-duration">
                        <span>{year}</span>
                        <span className="duration">{duration} min</span>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    </div>
        </div>
    )
}

export default MovieDetails;