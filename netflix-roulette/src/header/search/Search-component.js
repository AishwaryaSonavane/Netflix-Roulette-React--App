import React from 'react';
import './Search-component.css';

function Search() {
    return (
       <div className='search'>
            <input className='input' placeholder='What do you want to watch?'></input>
            <button className='button'>SEARCH</button>
       </div>
    )
}

export default Search;