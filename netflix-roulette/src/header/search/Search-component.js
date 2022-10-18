import React from 'react';
import './Search-component.css';

function Search() {
    return (
       <div className='search-section'>
            <input className='movie-input' placeholder='What do you want to watch?'></input>
            <button className='search-button'>SEARCH</button>
       </div>
    )
}

export default Search;