
export interface MovieCardProps {
    poster_path: string,
    title: string,
    release_date: string,
    genres: Array<string>
    id: number
}

interface MovieDeatils {
    poster_path: string,
    title: string,
    release_date: string,
    runtime?: number,
    overview?: string,
    vote_average?: number,
    genres?: Array<string>
    id?: number
}

export interface MoviesState {
    movies: any
    sortBy: string,
    selectedGenre: string,
    isModalOpen: boolean,
    editMovieDetails: MovieDeatils
    selecetedMovie: MovieDeatils
    searchedMovie: string
}

export interface DeleteMovieProps {
    showDeleteModal: boolean,
    movieId: number,
    closeDeleteModal: (params: boolean) => void
}

export interface AddEditMovieProps {
    isOpen: boolean
}

export interface AddEditMovieFormValues {
    poster_path: string,
    title: string,
    release_date: string,
    runtime: number,
    overview: string,
    vote_average: number,
    genres: any
}
  
export interface MoviesStateReducer {
rootReducer: MoviesState
}