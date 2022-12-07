import React, { useContext, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { openModal } from '../../../actions/moviesActions';
import { MovieDetailContext } from '../../../App';
import DeleteMovieModal from '../../../common/add-edit-movie-model/delete-movie-modal/Delete-Movie-Modal';
import { getModalState } from '../../../reducers/rootReducer';
import './Movie-card.css';

function MovieCard(props) {
    const [showEditDelModel, setEditDelModelState] = useState(false);
    const [showDeleteModal, setDelelteModelState] = useState(false);
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
        setDelelteModelState(data);
    }
        const {poster_path, title, release_date, genres, id} = props.movie;
        return (
            <div className='movie'>

                {showDeleteModal && <DeleteMovieModal movieId={id} showDeleteModal closeDeleteModal={setcloseDeleteModal}/> }
                {showEditDelModel && (
                     <div className='edit-delete-options'>
                     <button className='edit-delete-close' onClick={closeOptionsModel}>X</button>
                     <div className='edit'>Edit</div>
                     <div className='delete' onClick={() => setDelelteModelState(true)}>Delete</div>
               </div>
                )}
                <button className='close' onClick={showAddDeleteOptions}>X</button>
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


export default MovieCard;