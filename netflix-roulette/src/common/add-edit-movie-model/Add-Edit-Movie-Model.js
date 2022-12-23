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
                    <h2>{editMovieDetails.title ? 'EDIT MOVIE': 'ADD MOVIE'}</h2>     
                    <form data-testid="form" onSubmit={formik.handleSubmit} onReset={formik.handleReset} >
                        <div className="movie-detail--form">
                            <div className="detail__column-one">

                            <label htmlFor="title">TITLE</label>
                            <Field id="title" name="title" type="text" />
                            <ErrorMessage name="title" />

                            <label htmlFor="poster_path">MOVIE URL</label>
                            <Field id="poster_path" name="poster_path" type="url" />
                            <ErrorMessage name="poster_path" />

                            <label htmlFor="genres">GENRE</label>
                            <Field id="genres" name="genres" />
                            <ErrorMessage name="genres" />

                            </div>
                            <div className="detail__column-two">

                            <label htmlFor="release_date">RELEASED DATE</label>
                            <Field id="release_date" name="release_date" type="date" />
                            <ErrorMessage name="release_date" />

                            <label htmlFor="vote_average">RATING</label>
                            <Field id="vote_average" name="vote_average" type="number" />
                            <ErrorMessage name="vote_average" />

                            <label htmlFor="runtime">RUNTIME</label>
                            <Field id="runtime" name="runtime" type="number" />
                            <ErrorMessage name="runtime" />
                            </div>
                        </div>
                        <div className="overview">
                            <label htmlFor="overview">OVERVIEW</label><br/>
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