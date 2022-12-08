export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    payload: movies
});

export const sortMovies = (sortBy) => ({
    type: 'SORT_MOVIES',
    payload: sortBy
});

export const selectGenre = (genre) => ({
    type: 'SELECT_GENRE',
    payload: genre
});

export const openModal = () => ({
    type: 'OPEN_MODAL',
    payload: true
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL',
    payload: false
});

export const editMovie = (movie) => ({
    type: 'EDIT_MOVIE',
    payload: movie
})