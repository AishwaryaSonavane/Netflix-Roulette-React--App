const initial_state = {
    movies: [],
    sortBy: '',
    selectedGenre: ''
}

const rootReducer = (state = initial_state, action) => {
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

export default rootReducer;