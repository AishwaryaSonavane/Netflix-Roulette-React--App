import { closeModal, editMovie, getMovies, openModal, selectGenre, sortMovies } from "../actions/moviesActions";
import { rootReducer } from "./rootReducer"

const state = {
    movies: [],
    sortBy: '',
    selectedGenre: '',
    isModalOpen: false,
    editMovieDetails: {}
}

const mock_movies = [
    {
        "title": "La La Land",
        "tagline": "Here's to the fools who dream.",
        "vote_average": 7.9,
        "vote_count": 6782,
        "release_date": "2016-12-29",
        "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
        "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
        "budget": 30000000,
        "revenue": 445435700,
        "runtime": 128,
        "genres": [
          "Comedy",
          "Drama",
          "Romance"
        ],
        "id": 313369
    }
];

test('should return the original state openModal is called', () => {
    expect(rootReducer(undefined,{ type: undefined })).toEqual(state);
});

test('should set isModalOpen to true', () => {
    expect(rootReducer(state.isModalOpen, openModal())).toEqual({"isModalOpen": true});
});

test('should set isModalOpen to false if closeModal is called', () => {
    expect(rootReducer(state.isModalOpen, closeModal())).toEqual({"isModalOpen": false});
});

test('should set movies when getMovies action is called', () => {
    expect(rootReducer(state.movies, getMovies(mock_movies))).toEqual({"movies": mock_movies});
});

test('should set sortBy option if sortMovies action is called', () => {
    expect(rootReducer(state.sortBy, sortMovies('release_date'))).toEqual({"sortBy": 'release_date'});
});

test('should set genre when selectGenre action is called', () => {
    expect(rootReducer(state.selectedGenre, selectGenre('Comedy'))).toEqual({"selectedGenre": 'Comedy'});
});

test('should edit movie when editMovie action is called', () => {
    expect(rootReducer(state.editMovieDetails, editMovie(mock_movies[0]))).toEqual({"editMovieDetails": mock_movies[0]});
});