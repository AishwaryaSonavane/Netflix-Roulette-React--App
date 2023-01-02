import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState, openModal } from '../../reducers/rootReducer';
import AddEditMovieModel from '../add-edit-movie-model/Add-Edit-Movie-Model';
import styles from '../../styles/Add-Movie.module.css';

function AddMovie() {
    const isOpen = useSelector(getModalState);
    const dispatch = useDispatch();

    const addMovie = () => {
       dispatch(openModal());
    }

    return (
        <>
            <button className={styles.button__add} onClick={addMovie}>+ADD MOVIE</button>
            { isOpen && <AddEditMovieModel isOpen/> }
        </>
    )
}

export default AddMovie;