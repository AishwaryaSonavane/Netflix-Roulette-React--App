import React from "react";
import { GetServerSideProps } from "next";
import { getMoviesFromApi } from "../../api/api";
import { wrapper } from "../../store";
import { getMovies} from "../../reducers/rootReducer";
import Search from "../search";


function SelectedMovieGenre() {
    return (
        <>
            <Search/>
        </>         
        )
    }

    export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
        (store) =>
          async ({ params }) => {
        // Fetch data from external API
        const selectedGenre = params?.selectedGenre as string;
        const res = await getMoviesFromApi(selectedGenre,'','genres');
        const moviesData = await res;
        await store.dispatch(getMovies(moviesData))
        return { props: { moviesData } }; 
    });

    export default SelectedMovieGenre;