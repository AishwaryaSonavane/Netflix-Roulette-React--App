import React from "react";
import { getMoviesFromApi } from "../../api/api";
import { getMovies } from "../../reducers/rootReducer";
import { wrapper } from "../../store";
import Movies from "../movies/Movies";
import Search from "../search";

function SortBy() {
    return(
        <>
            <Search/>
            <Movies/>
        </>
    )
} 

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ params }) => {
    // Fetch data from external API
    const res = await getMoviesFromApi('',params.sort,'genres');
    const moviesData = await res;
    await store.dispatch(getMovies(moviesData))
    return { props: { moviesData } }; 
});

export default SortBy;