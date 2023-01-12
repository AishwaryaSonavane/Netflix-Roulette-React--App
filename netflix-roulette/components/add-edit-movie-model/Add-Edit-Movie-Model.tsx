import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import { addEditMovieFromApi } from "../../api/api";
import { closeModal, getEditMovieDetails } from "../../reducers/rootReducer";
import styles from '../../styles/Add-Edit-Movie-Model.module.css';
import { AddEditMovieFormValues, AddEditMovieProps } from "../../interface";

function AddEditMovieModel(props: AddEditMovieProps) {

    const editMovieDetails = useSelector(getEditMovieDetails);
    const dispatch = useDispatch();

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
            onSubmit={(formValues: AddEditMovieFormValues) => {
                const formData = {...formValues, genres: formValues.genres.split(',')}
                addEditMovieFromApi(formData).then(response => {
                    if (response.statusText === 'Created') {
                        dispatch(closeModal());
                    }
                })
            }}
            >
            {formik => (
                <>
                    { props.isOpen && (<div className={styles.add_edit_model}>
                    <button className={styles.close}  onClick={() => dispatch(closeModal())}>X</button>
                    <h2>{editMovieDetails.title ? 'EDIT MOVIE': 'ADD MOVIE'}</h2>     
                    <form className={styles.form}  data-testid="form" onSubmit={formik.handleSubmit} onReset={formik.handleReset} >
                        <div className={styles.movie_detail__form}>
                            <div className={styles.detail__column_one}>

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
                            <div className={styles.detail__column_two}>

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
                        <div className={styles.overview}>
                            <label htmlFor="overview">OVERVIEW</label><br/>
                            <textarea id="overview"
                                {...formik.getFieldProps('overview')}
                                name="overview"
                                onChange={formik.handleChange}
                                value={formik.values.overview} ></textarea>
                                {formik.touched.overview && formik.errors.overview ? (
                                        <span>{formik.errors.overview}</span>
                                    ) : null}
                        </div>
                        <div className={styles.form__buttons}>
                            <Button type="reset" variant="outlined">RESET</Button>
                            <Button type="submit" variant="contained">SUBMIT</Button>
                        </div>
                    </form>  
                </div>)}
                </>
            )}    
        </Formik>
    )
}

export default AddEditMovieModel;