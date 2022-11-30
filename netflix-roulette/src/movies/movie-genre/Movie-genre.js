import React, { useEffect } from "react";
import './Movie-genre.css';
import MovieCard from "./movie-card/Movie-card";
import {GENRES} from '../../constants';
import { connect } from "react-redux";
import { getMovies, selectGenre } from "../../actions/moviesActions";
import { getMoviesFromApi } from "../../api/api";
import MovieSort from "../movie-sort/Movie-sort";

function MovieGenre(props) {

const onSelectGenre = (category) => {
    getMoviesFromApi(category).then((movies) => {
        props.getMovies(movies);
    });

    props.selectGenre(category);

}

useEffect(() => {
    getMoviesFromApi().then((movies) => {
        props.getMovies(movies); 
    });
},[])

useEffect(() => {
    const { selectedGenre, sortBy } = props;
    getMoviesFromApi(selectedGenre,sortBy).then((movies) => {
        props.getMovies(movies); 
    });
},[props.sortBy])

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
                props.movies &&  props.movies.map((movie) => {
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

    function mapStateToProps(state) {
        return {
            movies: state.movies,
            sortBy: state.sortBy,
            selectedGenre: state.selectedGenre
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            getMovies: (movies) => dispatch(getMovies(movies)),
            selectGenre: (genre) => dispatch(selectGenre(genre))
        };
    }
export default connect(mapStateToProps,mapDispatchToProps)(MovieGenre);