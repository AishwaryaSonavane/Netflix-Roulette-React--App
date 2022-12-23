import React from "react";
import { connect } from "react-redux";
import { deleteMovieFromApi, getMoviesFromApi } from "../../api/api";
import { getMovies } from "../../actions/moviesActions";
import './Delete-Movie-Modal.css';

function DeleteMovieModal(props) {

    const deleteMovie = () => {
        console.log("Hey1",props.movieId);
        deleteMovieFromApi(props.movieId).then(response => {
            console.log("Hey",response);
            if (response.status === 204) {
                props.closeDeleteModal(false);

                getMoviesFromApi().then((movies) => {
                    props.getMovies(movies); 
                });
            }
        })
    }

    return (
        <>
            { props.showDeleteModal && (
            <div className="delete__movie">
                <span className="close" onClick={() => props.closeDeleteModal(false)}>x</span>
                <div className="content">
                    <h3>DELETE MOVIE</h3>
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={deleteMovie}>CONFIRM</button>
                </div>
            </div>
            )}
        </>  
    )
}
function mapDispatchToProps(dispatch) {
        return {
            getMovies: (movies) => dispatch(getMovies(movies))
        };
}

export default connect(null,mapDispatchToProps)(DeleteMovieModal);