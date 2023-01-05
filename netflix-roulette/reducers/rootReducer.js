import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    movies: [],
    sortBy: '',
    selectedGenre: '',
    isModalOpen: false,
    editMovieDetails: {},
    selecetedMovie: {},
    searchedMovie: ''
}

export const MovieSlice = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    getMovies: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = action.payload
    },
    sortMovies: (state,action) => {
        state.sortBy = action.payload
    },
    selectGenre: (state, action) => {
        state.sortBy = action.payload
    },
    openModal: (state) => {
        state.isModalOpen = true
    },
    closeModal: (state) => {
        state.isModalOpen = false
    },
    selecetedMovie: (state, action) => {
        state.selecetedMovie = action.payload
    },
    getSearchedMovie: (state,action) => {
      state.searchedMovie = action.payload
    },
    editMovieAction: (state, action) => {
        state.editMovieDetails = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.rootReducer,
      };
    },
  },
})

// Action creators are generated for each case reducer function
export const { getMovies, getSearchedMovie, openModal, closeModal, selecetedMovie, editMovieAction } = MovieSlice.actions

export const getMoviesData = (state, key) => state.rootReducer.movies;
export const getSelectedSortOption = (state) => state.rootReducer.sortBy;
export const getSelectedGenre = (state) => state.rootReducer.selectedGenre;
export const getModalState = (state) => state.rootReducer.isModalOpen;
export const getEditMovieDetails = (state) => state.rootReducer.editMovieDetails;
export const getSelectedMovie = (state) => state.rootReducer.selecetedMovie;
export const searchedMovie = (state) => state.rootReducer.searchedMovie;

export default MovieSlice.reducer