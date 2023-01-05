import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { getMoviesData } from "../../reducers/rootReducer";
import MovieCard from "../card";
import MovieSort from "../sort";
import { GENRES } from '../../constants';
import styles from '../../styles/Movie-genre.module.css';


function MovieGenre() {

    const router = useRouter();
    const movies = useSelector(getMoviesData);

    return (
        <>
            <div className={styles.genre_sortBy__section}>
                <div className={styles.genre}>
                        <nav>
                            <ul className={styles.list}>
                                { 
                                    GENRES.map((category,index) => {
                                        return (
                                            <li key={index}>
                                                <Link key={index} 
                                                href={`/genre/${category}`}>
                                                    { category }
                                                </Link>
                                            </li>
                                            );
                                        }   
                                    )
                                }
                        </ul>
                    </nav> 
                </div>
                { router.pathname !== '/sort' ? <MovieSort/> : ''}
            </div>
            
            <div className={styles.movie__section}>
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

    export default MovieGenre;