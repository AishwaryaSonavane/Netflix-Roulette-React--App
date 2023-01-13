import React from "react";
import { useRouter } from "next/router";
import AddMovieComponent from "../add-movie/Add-movie-component";
import styles from  '../../styles/Header.module.css';


function Header() {
    const router = useRouter();

    return(
        <>
            <div className={styles.header}>
            </div>
            <AddMovieComponent />
            <h1 className={styles.header__title}>FIND YOUR MOVIE</h1>
        </>
    )
}

export default Header; 