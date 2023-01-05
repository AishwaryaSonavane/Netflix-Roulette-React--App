import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovieFromApi, getMoviesFromApi } from "../../api/api";
import { getMovies } from "../../reducers/rootReducer";
import styles from '../../styles/Delete-Movie-Modal.module.css';

function DeleteMovieModal(props) {
    const dispatch = useDispatch();

    const deleteMovie = () => {
        deleteMovieFromApi(props.movieId).then(response => {
            if (response.status === 204) {
                props.closeDeleteModal(false);

                getMoviesFromApi().then((movies) => {
                    dispatch(getMovies(movies)); 
                });
            }
        })
    }

    return (
        <>
            { props.showDeleteModal && (
            <div className={styles.delete__movie}>
                <span className={styles.close} onClick={() => props.closeDeleteModal(false)}>x</span>
                <div className={styles.content}>
                    <h3>DELETE MOVIE</h3>
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={deleteMovie}>CONFIRM</button>
                </div>
            </div>
            )}
        </>  
    )
}

export default DeleteMovieModal;