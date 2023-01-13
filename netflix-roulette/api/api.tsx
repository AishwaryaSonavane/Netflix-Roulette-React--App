import { AddEditMovieFormValues } from "../interface"

export const getMoviesFromApi = (genre='', sortBy='release_date', searchBy='title') => {
   return fetch(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${genre}&searchBy=${searchBy}`)
        .then(response => response.json()).then(res => res.data)
}

export const addEditMovieFromApi = (movieData: AddEditMovieFormValues) => {
    return fetch('http://localhost:4000/movies',{
                      method: 'POST',
                      headers: {
                      'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(movieData)
                  })
                  .then(response => response)
}

export const  deleteMovieFromApi = (movieId: number) => {
      return fetch(`http://localhost:4000/movies/${movieId}`,{
                      method: 'DELETE',
                      headers: {
                      'Content-Type': 'application/json',
                      },
                  })
                  .then(response => response);
}