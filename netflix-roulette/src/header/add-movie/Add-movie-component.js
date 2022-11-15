import React from 'react';
import AddEditMovieModel from '../../common/add-edit-movie-model/Add-Edit-Movie-Model';
import './Add-movie-component.css';

class AddMovie extends React.Component {
    constructor() {
        super();
        this.state = {
          showModel: false
        };
    }
    addMovie = () => {
        this.setState({
            showModel: !this.state.showModel
        });
    }

    setShowModel = (data) => {
        this.setState({
            showModel: data
        })
    }

    render() {
        return (
            <>
                <button className='button--add' onClick={this.addMovie}>+ADD MOVIE</button>
                { this.state.showModel && <AddEditMovieModel showAddModel={this.setShowModel}/> }
            </>
           
        )
    }
  
}

export default AddMovie;