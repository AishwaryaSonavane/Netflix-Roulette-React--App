import React from "react";
import './Delete-Movie-Modal.css';

function DeleteMovieModal(props) {
    return (
        <>
            { props.showDeleteModal && (
            <div className="delete__movie">
                <span className="close" onClick={() => props.closeDeleteModal(false)}>x</span>
                <div className="content">
                    <h3>DELETE MOVIE</h3>
                    <p>Are you sure you want to delete this movie?</p>
                    <button>CONFIRM</button>
                </div>
            </div>
            )}
        </>  
    )
}

export default DeleteMovieModal;