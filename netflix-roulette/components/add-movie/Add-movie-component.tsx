import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
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
             <Button className={styles.button__add} variant="contained" onClick={addMovie}>+ADD MOVIE</Button>
            { isOpen && <AddEditMovieModel isOpen/> }
        </>
    )
}

export default AddMovie;