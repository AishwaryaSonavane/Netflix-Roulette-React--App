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