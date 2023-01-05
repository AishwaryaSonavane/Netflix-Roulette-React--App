import React from "react";
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

    export const getServerSideProps = wrapper.getServerSideProps(
        (store) =>
          async ({ params }) => {
        // Fetch data from external API
        const res = await getMoviesFromApi(params.selectedGenre,'','genres');
        const moviesData = await res;
        await store.dispatch(getMovies(moviesData))
        return { props: { moviesData } }; 
    });

    export default SelectedMovieGenre;