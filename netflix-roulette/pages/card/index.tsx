import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { CardActionArea } from '@mui/material';
import { editMovieAction, openModal, selecetedMovie } from '../../reducers/rootReducer';
import DeleteMovieModal from '../../components/delete-movie-modal/Delete-Movie-Modal';
import styles from '../../styles/Movie-card.module.css';
import Image from 'next/image';
import { MovieCardProps } from '../../interface';


type MovieProps = {
    movie: MovieCardProps
}
function MovieCard(props: MovieProps) {
    const [showEditDelModel, setEditDelModelState] = useState(false);
    const [showDeleteModal, setDelelteModalState] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const showAddDeleteOptions = () => {
        console.log("111111")
        setEditDelModelState(true);        
    }

    const closeOptionsModel = () => {
        setEditDelModelState(false);
    } 

    const selectMovie = (movieDetails: MovieCardProps) => {
        dispatch(selecetedMovie(movieDetails));
       router.push(`/movies/movie=${movieDetails?.id}`);
    }

    const setcloseDeleteModal = (data: boolean) => {
        setDelelteModalState(data);
    }

    const openEditModal = () => {
        dispatch(openModal());
        setEditDelModelState(false);
        dispatch(editMovieAction(props.movie));
    }
    const {poster_path, title, release_date, genres, id} = props.movie;
    return (
        <>
        {showDeleteModal && <DeleteMovieModal movieId={id} showDeleteModal closeDeleteModal={setcloseDeleteModal}/> }
                {showEditDelModel && (
                    <div className={styles.edit_delete_options_modal}>
                        <button className={styles.edit_delete_close} onClick={closeOptionsModel}>X</button>
                        <div className={styles.edit} onClick={openEditModal}>Edit</div>
                        <div className={styles.delete} onClick={() => setDelelteModalState(true)}>Delete</div>
                    </div>
            )}
            <Card sx={{ maxWidth: 300 }} className={styles.movie}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    alt={title} 
                    image={poster_path}
                    onClick={() => selectMovie(props.movie)}
                    />
                    <InfoIcon fontSize='small' onClick={showAddDeleteOptions} className={styles.edit_delete_options}/>
                    <CardContent>
                    <CardActions className={styles.detail}>    
                    <Typography className={styles.movie__title} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    {release_date && <div className={styles.movie__year}>{release_date.split('-')[0]}</div>}
                    </CardActions>
                    <Typography className={styles.movie__category} variant="body2" color="text.secondary">
                    {genres && genres.map((genre,i) => <span key={i}>{genre} &nbsp;</span> )}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
        )    
    }


export default MovieCard;