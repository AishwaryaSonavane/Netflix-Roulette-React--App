import React from "react";
import './Movie-genre.css';
import movies from '../../mock-data/mock-movie-data.json';
import MovieCard from "./movie-card/Movie-card";
import {GENRES} from '../../constants';

class MovieGenre extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: '',
            genreList: GENRES,
            movies: []
        } 
    }

    onSelectGenre = (category) => {
        this.setState(({selectedCategory: category}));
      
        const selectedCategoryMovies = movies.categories.filter(movie => {
            return movie.category === category
        });
        this.setState(({movies: selectedCategoryMovies}));
    } 
    
    render() {
        return (
           <div className="movies">
                <div className="movies__genre">
                        { 
                       this.state.genreList.map((category,index) => {
                                return (
                                    <div onClick={() => this.onSelectGenre(category)} key={index}>
                                    { category }
                                    </div>
                                    );
                                }
                            ) 
                        }
                </div>
                {
                    this.state.movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                    }) 
                } 
                
           </div> 
            
        )
    }
}

export default MovieGenre;