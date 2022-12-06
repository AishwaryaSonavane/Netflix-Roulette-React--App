import React from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { connect } from "react-redux";
import { closeModal } from "../../actions/moviesActions";
import * as Yup from 'yup';
import './Add-Edit-Movie-Model.css';

function AddEditMovieModel(props) {

    const closeModel = () => {
        props.closeModal();
    }

    const formik = useFormik({

    });

    return (
    <Formik         
        initialValues={{
            title: '',
            poster_path: '',
            genres: [],
            release_date: '',
            vote_average: 0,
            runtime: 0,
            overview: ''
  
          }}
          validationSchema={Yup.object({
              title: Yup.string().required('Required'),
              poster_path: Yup.string().required('Required'),
              genres: Yup.array().required('Required'),
              release_date: Yup.string().required('Required'),
              vote_average: Yup.number()
              .typeError('Rating must be a number')
              .required('Required'),
              runtime: Yup.number()
              .typeError('runtime must be a number')
              .required('Required'),
              overview: Yup.string().required('Required')
            })}
          onSubmit={values => {
              console.log("values",values)
              fetch('http://localhost:4000/movies',{
                      method: 'POST',
                      headers: {
                      'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(values)
                  })
                  .then(response => console.log("RESSS",response));
            }}>
            {formik => (
                <>
                    { props.isOpen && (<div className="add-edit-model">
                    <button className="close"  onClick={closeModel}>X</button>
                    <h2>ADD MOVIE</h2>     
                    <form onSubmit={formik.handleSubmit}>
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