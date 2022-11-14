import React from 'react';
import './Movie-card.css';

class MovieCard extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    showAddDeleteOptions = () => {
        this.setState({
            show: true
        });
    }
    closeOptionsModel = () => {
        this.setState({
            show: false
        })
    }

    render() {
        const {image_url, title, year, category} = this.props.movie;
        return (
            <div className='movie'>
                {this.state.show && (
                     <div className='edit-delete-options'>
                     <button className='edit-delete-close' onClick={this.closeOptionsModel}>X</button>
                     <div className='edit'>Edit</div>
                     <div className='delete'>Delete</div>
               </div>
                )}
                <button className='close' onClick={this.showAddDeleteOptions}>X</button>
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
   
}

export default MovieCard;