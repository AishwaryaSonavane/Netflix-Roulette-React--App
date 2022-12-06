import React from 'react';
import { connect, useSelector } from 'react-redux';
import { openModal } from '../../actions/moviesActions';
import AddEditMovieModel from '../../common/add-edit-movie-model/Add-Edit-Movie-Model';
import { getModalState } from '../../reducers/rootReducer';
import './Add-movie-component.css';

function AddMovie(props) {
    const isOpen = useSelector(getModalState);

    const addMovie = () => {
        console.log("open",isOpen)
        props.openModal();
    }

    return (
        <>
            <button className='button--add' onClick={addMovie}>+ADD MOVIE</button>
            { isOpen && <AddEditMovieModel isOpen/> }
        </>
        
    )
  
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(openModal())
    };
}
export default connect(null,mapDispatchToProps)(AddMovie);