import React from "react";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { deleteMovieFromApi, getMoviesFromApi } from "../../api/api";
import { DeleteMovieProps } from "../../interface";
import { getMovies } from "../../reducers/rootReducer";
import styles from '../../styles/Delete-Movie-Modal.module.css';

function DeleteMovieModal(props: DeleteMovieProps) {
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
                <CloseIcon fontSize='small' className={styles.close} onClick={() => props.closeDeleteModal(false)}>x</CloseIcon>
                <div className={styles.content}>
                    <h3>DELETE MOVIE</h3>
                    <p>Are you sure you want to delete this movie?</p>
                    <Button onClick={deleteMovie} size="large">CONFIRM</Button>
                </div>
            </div>
            )}
        </>  
    )
}

export default DeleteMovieModal;