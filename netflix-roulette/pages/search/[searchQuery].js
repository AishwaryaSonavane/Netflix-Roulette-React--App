import { useRouter } from "next/router";
import Header from "../../components/header/header";
import Movies from "../movies/Movies";
import { getMoviesFromApi } from "../../api/api";
import { getMovies } from "../../reducers/rootReducer";
import { wrapper } from "../../store";
import Search from ".";

export default function SearchQuery() {
    const router = useRouter();
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
    const res = await getMoviesFromApi(params.searchQuery);
    const moviesData = await res;
    await store.dispatch(getMovies(moviesData))
    return { props: { moviesData } }; 
});