import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../../actions/moviesActions';
import { getMoviesFromApi } from '../../api/api';
import './Search-component.css';

function Search(props) {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const onSearch = () => {
        navigate(`/search/${inputRef.current.value}`);
        getMoviesFromApi(inputRef.current.value, '', 'title').then(response => {
            props.getMovies(response)
        })
    }

    return (
       <div className='search'>
            <input className='input' ref={inputRef} placeholder='What do you want to watch?'></input>
            <button className='button' onClick={onSearch}>SEARCH</button>
       </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getMovies: (movies) => dispatch(getMovies(movies))
    };
}

export default connect(null, mapDispatchToProps)(Search);