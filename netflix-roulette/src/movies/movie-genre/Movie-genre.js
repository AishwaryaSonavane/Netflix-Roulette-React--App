import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getMovies, selectGenre } from "../../actions/moviesActions";
import { getMoviesFromApi } from "../../api/api";
import { getMoviesData, getSelectedGenre, getSelectedSortOption } from "../../reducers/rootReducer";
import { GENRES } from '../../constants';
import MovieCard from "./movie-card/Movie-card";
import MovieSort from "../movie-sort/Movie-sort";
import './Movie-genre.css';


function MovieGenre(props) {

    const movies = useSelector(getMoviesData);
    const sortBy = useSelector(getSelectedSortOption);
    const selectedGenre = useSelector(getSelectedGenre);

const onSelectGenre = (category) => {
    getMoviesFromApi(category).then((movies) => {
        props.getMovies(movies);
    });

}

useEffect(() => {
    getMoviesFromApi().then((movies) => {
        props.getMovies(movies); 
    });
},[])

useEffect(() => {
    getMoviesFromApi(selectedGenre,sortBy).then((movies) => {
        props.getMovies(movies); 
    });
},[sortBy])

    return (
        <>
            <div className="genre_sortBy__section">
                <div className="genre">
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
                <MovieSort/>
            </div>
            
            <div className="movie__section">
                {
                movies &&  movies.map((movie) => {
                        return (
                            <>
                                <MovieCard key={movie.id} movie={movie}/>
                            </>
                        )
                    }) 
                }      
            </div>
              
        </> 
            
        )
    }

    function mapDispatchToProps(dispatch) {
        return {
            getMovies: (movies) => dispatch(getMovies(movies)),
            selectGenre: (genre) => dispatch(selectGenre(genre))
        };
    }
export default connect(null,mapDispatchToProps)(MovieGenre);