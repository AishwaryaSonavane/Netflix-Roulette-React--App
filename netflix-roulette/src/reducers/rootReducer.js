const initial_state = {
    movies: [],
    sortBy: '',
    selectedGenre: ''
}

export const rootReducer = (state = initial_state, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'GET_MOVIES': 
            return {
                ...state,
                movies: action.payload
            }
        case 'SORT_MOVIES':  
            return {
                ...state,
                sortBy: action.payload
          }
        case 'SELECT_GENRE':
            return {
                ...state,
                selectedGenre: action.payload
            }  
        default: 
            return state;  
    }
}

export const getMoviesData = (state, key) => state.movies;
export const getSelectedSortOption = (state) => state.sortBy;
export const getSelectedGenre = (state) => state.selectedGenre;