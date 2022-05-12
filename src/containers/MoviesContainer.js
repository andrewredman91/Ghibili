import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList';

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
      getMovies();
  }, [])

  const getMovies = () => {
      fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }

  const onMovieClick = (movie) => {
    setSelectedMovie(movie);
  }


  return (
    <>
      <ul>
        <MovieList movies={movies} onMovieClick=
        {onMovieClick}></MovieList>
      </ul>
      <p>
        {selectedMovie ? selectedMovie.description : null}
      </p>
    </>

  )

}

export default MoviesContainer;