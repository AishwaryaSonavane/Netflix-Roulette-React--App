import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { editMovieAction, openModal, selecetedMovie } from '../../reducers/rootReducer';
import DeleteMovieModal from '../../components/delete-movie-modal/Delete-Movie-Modal';
import styles from '../../styles/Movie-card.module.css';

function MovieCard(props) {
    const [showEditDelModel, setEditDelModelState] = useState(false);
    const [showDeleteModal, setDelelteModalState] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const showAddDeleteOptions = () => {
        setEditDelModelState(true);        
    }

    const closeOptionsModel = () => {
        setEditDelModelState(false);
    } 

    const selectMovie = (movieDetails) => {
        dispatch(selecetedMovie(movieDetails));
       router.push(`/movies/movie=${movieDetails.id}`);
    }

    const setcloseDeleteModal = (data) => {
        setDelelteModalState(data);
    }

    const openEditModal = () => {
        dispatch(openModal());
        setEditDelModelState(false);
        console.log("props.movie",props.movie)
        dispatch(editMovieAction(props.movie));
    }
    const {poster_path, title, release_date, genres, id} = props.movie;
    return (
        <>
            <div className={styles.movie}>
                {showDeleteModal && <DeleteMovieModal movieId={id} showDeleteModal closeDeleteModal={setcloseDeleteModal}/> }
                {showEditDelModel && (
                    <div className={styles.edit_delete_options_modal}>
                        <button className={styles.edit_delete_close} onClick={closeOptionsModel}>X</button>
                        <div className={styles.edit} onClick={openEditModal}>Edit</div>
                        <div className={styles.delete} onClick={() => setDelelteModalState(true)}>Delete</div>
                    </div>
                )}
                    <button className={styles.edit_delete_options} onClick={showAddDeleteOptions}>i</button>
                <img className={styles.image} src={poster_path} alt={title} onClick={() => selectMovie(props.movie)}/>
                <div className={styles.detail}>
                    <span data-testid="movie-title" className={styles.movie__title}>{title}</span>
                    {release_date && <span className={styles.movie__year}>{release_date.split('-')[0]}</span>}
                </div>
                <div className={styles.movie__category}>
                    {genres && genres.map((genre,i) => <span key={i}>{genre} &nbsp;</span> )}
                </div>
            </div>
        </>
        )    
    }


export default MovieCard;