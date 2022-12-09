export function getMoviesFromApi(genre='', sortBy='') {
   return fetch(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${genre}&searchBy=genres`)
        .then(response => response.json()).then(res => res.data)
}

export function addEditMovieFromApi(movieData) {
    return fetch('http://localhost:4000/movies',{
                      method: 'POST',
                      headers: {
                      'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(movieData)
                  })
                  .then(response => response)
}

export function deleteMovieFromApi(movieId) {
      return fetch(`http://localhost:4000/movies/${movieId}`,{
                      method: 'DELETE',
                      headers: {
                      'Content-Type': 'application/json',
                      },
                  })
                  .then(response => response);
}