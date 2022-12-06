const initial_state = {
    movies: [],
    sortBy: '',
    selectedGenre: '',
    isModalOpen: false
}

export const rootReducer = (state = initial_state, action) => {
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
        case 'OPEN_MODAL':
            return {
                ...state,
                isModalOpen: action.payload
            }  
        case 'CLOSE_MODAL':
            return {
                ...state,
                isModalOpen: action.payload
            }      
        default: 
            return state;  
    }
}

export const getMoviesData = (state, key) => state.movies;
export const getSelectedSortOption = (state) => state.sortBy;
export const getSelectedGenre = (state) => state.selectedGenre;
export const getModalState = (state) => state.isModalOpen;