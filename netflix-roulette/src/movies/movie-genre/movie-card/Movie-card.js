import React, { useContext, useState } from 'react';
import { MovieDetailContext } from '../../../App';
import './Movie-card.css';

function MovieCard(props) {
    const [showEditDelModel, setEditDelModelState] = useState(false);
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
        const {poster_path, title, release_date, genres} = props.movie;
        return (
            <div className='movie'>
                {showEditDelModel && (
                     <div className='edit-delete-options'>
                     <button className='edit-delete-close' onClick={closeOptionsModel}>X</button>
                     <div className='edit'>Edit</div>
                     <div className='delete'>Delete</div>
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