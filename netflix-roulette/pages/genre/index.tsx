import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getMoviesData, getSelectedGenre, selectGenre } from "../../reducers/rootReducer";
import MovieCard from "../card";
import MovieSort from "../sort";
import { GENRES } from '../../constants';
import styles from '../../styles/Movie-genre.module.css';


function MovieGenre() {

    const router = useRouter();
    const dispatch = useDispatch();
    const movies = useSelector(getMoviesData);
    const selectedGenre = router.query.selectedGenre ?? useSelector(getSelectedGenre);


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      dispatch(selectGenre(newValue));
      router.push(`/genre/${newValue}`);
      
    };
    

    return (
        <>
            <div className={styles.genre_sortBy__section}>
            <Box sx={{ width: '70%' }}>
                <Tabs
                    value={selectedGenre}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    className={styles.tabs}
                >
                        <Tab value='All' label='All' />
                        <Tab value='Documentary' label='Documentary' />
                        <Tab value='Comedy' label='Comedy' />
                        <Tab value='Horror' label='Horror' />
                        <Tab value='Crime' label='Crime' />
                    </Tabs>
                </Box>
                { router.pathname !== '/sort' ? <MovieSort/> : ''}
            </div>
            
            <div className={styles.movie__section}>
                {
                movies &&  movies.map((movie: any) => {
                        return (
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                    }) 
                }      
            </div>
        </> 
        )
    }

    export default MovieGenre;