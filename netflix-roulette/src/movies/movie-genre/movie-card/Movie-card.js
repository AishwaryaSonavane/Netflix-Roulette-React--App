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
        console.log(movieDetails)
        setValue(movieDetails);
    }
        const {image_url, title, year, category} = props.movie;
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
                <img className='image' src={require(`../../../assets/${image_url}`)} alt={title} onClick={() => selectMovie(props.movie)}/>
                <div className='detail'>
                    <span className='movie__title'>{title}</span>
                    <span className='movie__year'>{year}</span>
                </div>
                <div className='movie__category'>
                    <span>{category}</span>
                </div>
            </div>
        )    
    }

export default MovieCard;