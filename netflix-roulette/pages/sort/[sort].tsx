import React from "react";
import { GetServerSideProps } from "next";
import { getMoviesFromApi } from "../../api/api";
import { getMovies } from "../../reducers/rootReducer";
import { wrapper } from "../../store";
import Search from "../search";

function SortBy() {
    return(
        <>
            <Search/>
        </>
    )
} 

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ params }) => {
    const  sort = params?.sort as string;
    // Fetch data from external API
    const res = await getMoviesFromApi('',sort,'genres');
    const moviesData = await res;
    await store.dispatch(getMovies(moviesData))
    return { props: { moviesData } }; 
});

export default SortBy;