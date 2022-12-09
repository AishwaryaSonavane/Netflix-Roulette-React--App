import React from "react";
import { connect, useSelector } from "react-redux";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import { addEditMovieFromApi } from "../../api/api";
import { closeModal } from "../../actions/moviesActions";
import { getEditMovieDetails } from "../../reducers/rootReducer";
import './Add-Edit-Movie-Model.css';

function AddEditMovieModel(props) {

    const editMovieDetails = useSelector(getEditMovieDetails);

    const closeModel = () => {
        props.closeModal();
    }

    return (
    <Formik         
        initialValues={{
            title: editMovieDetails.title ?? '',
            poster_path: editMovieDetails.poster_path ?? '',
            genres: editMovieDetails && editMovieDetails.genres ? editMovieDetails.genres.toString() : [],
            release_date: editMovieDetails.release_date ?? '',
            vote_average: editMovieDetails.vote_average ?? 0,
            runtime: editMovieDetails.runtime ?? 0,
            overview: editMovieDetails.overview ?? ''
          }}
          validationSchema={Yup.object({
              title: Yup.string().required('Required'),
              poster_path: Yup.string().required('Required'),
              genres: Yup.array().nullable(),
              release_date: Yup.string().required('Required'),
              vote_average: Yup.number()
              .typeError('Rating must be a number')
              .required('Required'),
              runtime: Yup.number()
              .typeError('runtime must be a number')
              .required('Required'),
              overview: Yup.string().required('Required')
            })}
            onSubmit={formValues => {
                const formData = {...formValues, genres: formValues.genres.split(',')}
                addEditMovieFromApi(formData).then(response => {
                    if (response.statusText === 'Created') {
                        props.closeModal();
                    }
                })
            }}
            >
            {formik => (
                <>
                    { props.isOpen && (<div className="add-edit-model">
                    <button className="close"  onClick={closeModel}>X</button>
                    <h2>{editMovieDetails ? 'EDIT MOVIE': 'ADD MOVIE'}</h2>     
                    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} >
                        <div className="movie-detail--form">
                            <div className="detail__column-one">

                            <label htmlFor="title">TITLE</label>
                            <Field name="title" type="text" />
                            <ErrorMessage name="title" />

                            <label htmlFor="title">MOVIE URL</label>
                            <Field name="poster_path" type="url" />
                            <ErrorMessage name="poster_path" />

                            <label htmlFor="title">GENRE</label>
                            <Field name="genres" />
                            <ErrorMessage name="genres" />

                            </div>
                            <div className="detail__column-two">

                            <label htmlFor="title">RELEASED DATE</label>
                            <Field name="release_date" type="date" />
                            <ErrorMessage name="release_date" />

                            <label htmlFor="title">RATING</label>
                            <Field name="vote_average" type="number" />
                            <ErrorMessage name="vote_average" />

                            <label htmlFor="title">RUNTIME</label>
                            <Field name="runtime" type="number" />
                            <ErrorMessage name="runtime" />
                            </div>
                        </div>
                        <div className="overview">
                            <label>OVERVIEW</label><br/>
                            <textarea rows="6" id="overview"
                                name="overview"
                                onChange={formik.handleChange}
                                value={formik.values.overview} {...formik.getFieldProps('overview')}></textarea>
                                {formik.touched.overview && formik.errors.overview ? (
                                        <span>{formik.errors.overview}</span>
                                    ) : null}
                        </div>
                        <div className="form--buttons">
                            <input type="reset" value="RESET"/>
                            <input type="submit" value="SUBMIT"/>
                        </div>
                    </form>  
                </div>)}
                </>
            )}    
        </Formik>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(null, mapDispatchToProps)(AddEditMovieModel);