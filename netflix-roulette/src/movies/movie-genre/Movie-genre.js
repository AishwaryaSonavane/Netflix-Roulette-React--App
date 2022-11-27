import React, { useEffect, useState } from "react";
import './Movie-genre.css';
import MOCK_MOVIES from '../../mock-data/mock-movie-data.json';
import MovieCard from "./movie-card/Movie-card";
import {GENRES} from '../../constants';

function MovieGenre() {

const [selectedCategory, setSelectedCategory] = useState();
const [movies, setMovies] = useState();

const onSelectGenre = (category) => {
    setSelectedCategory(category);    
}

useEffect(() => {
    const selectedCategoryMovies = MOCK_MOVIES.categories.filter(movie => {
        return movie.category === selectedCategory
    });
    setMovies(selectedCategoryMovies);
},[selectedCategory]);

    return (
        <div className="movies">
            <div className="movies__genre">
                { 
                    GENRES.map((category,index) => {
                        return (
                            <div onClick={() => onSelectGenre(category)} key={index}>
                            { category }
                            </div>
                            );
                        }
                    ) 
                }
            </div>
            {
             movies &&  movies.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie}/>
                    )
                }) 
            }        
        </div> 
            
        )
    }

export default MovieGenre;