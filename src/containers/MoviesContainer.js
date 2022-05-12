import React, { useEffect, useState } from 'react'

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
      getMovies();
  }, [])

  const getMovies = () => {
      fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }

  const listMovies = movies.map(movie => {
    return (
      <li>{movie.title}</li>
    )
  })
      


  return (
    <ul>
      {listMovies}
    </ul>
  )

}



export default MoviesContainer;