import React from "react";
import './Add-Edit-Movie-Model.css';

class AddEditMovieModel extends React.Component {
    constructor() {
        super();
        this.state = {
            showModel: true
        }
    }

    closeModel = () => {
        this.setState({showModel: false});
        this.props.showAddModel(false);
    }

    render() {
        return (
            <>
             { this.state.showModel && (<div className="add-edit-model">
                <button className="close"  onClick={this.closeModel}>X</button>
                <h2>ADD MOVIE</h2>     
                    <form>
                        <div className="movie-detail--form">
                            <div className="detail__column-one">
                                <label>TITLE</label><br/>
                                <input type="text"></input><br/>
                                <label>MOVIE URL</label><br/>
                                <input type="url"></input><br/>
                                <label>GENRE</label><br/>
                                <input type="text"></input>
                            </div>
                            <div className="detail__column-two">
                                <label>RELEASED DATE</label><br/>
                                <input type="date"></input><br/>
                                <label>RATING</label><br/>
                                <input type="number"></input>  <br/>
                                <label>RUNTIME</label><br/>
                                <input type="text"></input><br/>
                            </div>
                        </div>
                        <div className="overview">
                            <label>OVERVIEW</label><br/>
                            <textarea rows="6"></textarea>
                        </div>
                        <div className="form--buttons">
                            <input type="reset" value="RESET"/>
                            <input type="submit" value="SUBMIT"/>
                        </div>
                    </form>  
            </div>)}
            </>
           
        )
    }
}

export default AddEditMovieModel;