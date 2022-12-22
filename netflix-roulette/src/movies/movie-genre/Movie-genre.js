import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const genreParam = searchParams.get('genre');
    let location = useLocation();
    const getUrlPath = location.pathname + location.search;

    const onSelectGenre = (category) => {
        props.selectGenre(category);
        getMoviesFromApi(category,'','genres').then((movies) => {
            props.getMovies(movies);
        });
    }

    useEffect(() => {
        getMoviesFromApi().then((movies) => {
            props.getMovies(movies); 
        });
        navigate('?genre=All');
    },[])

    useEffect(() => {
        getMoviesFromApi(selectedGenre,sortBy).then((movies) => {
            props.getMovies(movies); 
        });
    },[selectedGenre,sortBy])

    useEffect(() => {
        onSelectGenre(genreParam)
    },[genreParam])

    return (
        <>
            <div className="genre_sortBy__section">
                <div className="genre">
                        <nav>
                            <ul>
                                { 
                                    GENRES.map((category,index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink key={index} onClick={(category) => onSelectGenre(category)} 
                                                to={`?genre=${category}`}
                                                className={({ isActive }) => ((isActive && getUrlPath === `/search?genre=${category}`)? 'active' : 'inactive')}
                                                end={true}>
                                                    { category }
                                                </NavLink>
                                            </li>
                                            );
                                        }   
                                    )
                                }
                        </ul>
                    </nav> 
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