import React from 'react';
import './Movie-card.css';

function MovieCard(props) {
    const {image_url, title, year, category} = props.movie;
    return (
        <div className='movie'>
            <img className='image' src={require(`../../../assets/${image_url}`)} alt={title} />
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