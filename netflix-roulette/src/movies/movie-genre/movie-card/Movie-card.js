import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import DeleteMovieModal from '../../../common/add-edit-movie-model/delete-movie-modal/Delete-Movie-Modal';
import { editMovie, openModal } from '../../../actions/moviesActions';
import { MovieDetailContext } from '../../../App';
import './Movie-card.css';

function MovieCard(props) {
    const [showEditDelModel, setEditDelModelState] = useState(false);
    const [showDeleteModal, setDelelteModalState] = useState(false);
    const {setValue} = useContext(MovieDetailContext);

    const showAddDeleteOptions = () => {
        setEditDelModelState(true);        
    }

    const closeOptionsModel = () => {
        setEditDelModelState(false);
    }

    const selectMovie = (movieDetails) => {
        setValue(movieDetails);
    }

    const setcloseDeleteModal = (data) => {
        setDelelteModalState(data);
    }

    const openEditModal = () => {
        props.openModal();
        setEditDelModelState(false);
        props.editMovie(props.movie)
    }
    const {poster_path, title, release_date, genres, id} = props.movie;
    return (
        <div className='movie'>

            {showDeleteModal && <DeleteMovieModal movieId={id} showDeleteModal closeDeleteModal={setcloseDeleteModal}/> }
            {showEditDelModel && (
                <div className='edit-delete-options-modal'>
                    <button className='edit-delete-close' onClick={closeOptionsModel}>X</button>
                    <div className='edit' onClick={openEditModal}>Edit</div>
                    <div className='delete' onClick={() => setDelelteModalState(true)}>Delete</div>
            </div>
            )}
                <button className='edit-delete-options' onClick={showAddDeleteOptions}>i</button>
            <img className='image' src={poster_path} alt={title} onClick={() => selectMovie(props.movie)}/>
            <div className='detail'>
                <span className='movie__title'>{title}</span>
                {release_date && <span className='movie__year'>{release_date.split('-')[0]}</span>}
            </div>
            <div className='movie__category'>
                {genres && genres.map((genre,i) => <span key={i}>{genre} &nbsp;</span> )}
            </div>
        </div>
    )    
    }

    function mapDispatchToProps(dispatch) {
        return {
            openModal: () => dispatch(openModal()),
            editMovie: (movie) => dispatch(editMovie(movie))
        };
    }


export default connect(null, mapDispatchToProps)(MovieCard);