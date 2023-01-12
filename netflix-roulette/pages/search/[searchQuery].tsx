import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({params}) => {
    // Fetch data from external API
    const searchQuery = params?.searchQuery as string;
    const res = await getMoviesFromApi(searchQuery);
    const moviesData = await res;
    await store.dispatch(getMovies(moviesData))
    return { props: { moviesData } }; 
});