import React from "react";
import { connect } from "react-redux";
import { sortMovies } from "../../actions/moviesActions";
import './Movie-sort.css'

function MovieSort(props) {
    const sortMovies = (option) => {
        props.sortMoviesBy(option);
    }

    return(
        <div className="sort">
            <span>SORT BY</span>
            <select className="options" onChange={e => sortMovies(e.target.value)}>
                <option value='release_date'>RELEASE DATE</option>
                <option value='vote_average'>RATING</option>
            </select>
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {
        sortMoviesBy: (option) => dispatch(sortMovies(option))
    }
}

export default connect('',mapDispatchToProps)(MovieSort);