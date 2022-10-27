import React from "react";
import './Movie-genre.css';

class MovieGenre extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: '',
            genreList: ['All', 'Documentary', 'Comedy','Horror', 'Crime'],
        } 
    }

    onSelectGenre = (category) => {
        this.setState((prevState) => ({selectedCategory: category}))
    } 
    
    render() {
        return (
           <div className="movies">
                <div className="movies__genre">
                        { 
                       this.state.genreList.map((category,index) => {
                                return (
                                    <div onClick={() => this.onSelectGenre(category)} key={index}>
                                    { category }
                                    </div>
                                    );
                                }
                            ) 
                        }
                </div>
                <h3>{this.state.selectedCategory}</h3>
           </div> 
            
        )
    }
}

export default MovieGenre;