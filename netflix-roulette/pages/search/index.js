import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Movies from '../movies/Movies';
import Header from '../../components/header/header';
import { getMoviesFromApi } from '../../api/api';
import { getMovies } from '../../reducers/rootReducer';
import { wrapper } from "../../store";
import styles from '../../styles/Search.module.css'

function Search(props) {
    const inputRef = useRef(null);
    const router = useRouter();

    const onSearch = () => {
        router.push(`/search/${inputRef.current.value}`)
    }

    return (
      <>
       <Header/>
        <div className={styles.search}>
            <input className={styles.input} ref={inputRef} placeholder='What do you want to watch?'></input>
            <button className={styles.button} onClick={onSearch}>SEARCH</button>
        </div>
        <Movies moviesData={props.moviesData}/>
      </>  
      
    )
}

// This gets called on every request
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ params }) => {
    // Fetch data from external API
    const res = await getMoviesFromApi();
    const moviesData = await res;
    await store.dispatch(getMovies(moviesData))
    return { props: { moviesData } }; 
});

export default Search;
