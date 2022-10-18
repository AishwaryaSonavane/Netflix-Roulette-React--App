import React from "react";
import './Movie-genre.css';

class MovieGenre extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: ''
        }
    }

    onSelectGenre = (category) => {
        console.log("Category",category)
        this.setState((prevState) => ({selectedCategory: category}))
    } 

    render() {
        const genreList = ['All', 'Documentary', 'Comedy','Horror', 'Crime']; 
        return (
           <div className="movies">
                <div className="movie-genre">
                        { 
                        genreList.map((category,index) => {
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