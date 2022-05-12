import React from 'react';
import ListItem from './ListItem';


const MovieList = ({movies, onMovieClick}) => {

    const moviesItems = movies.map(movie => {
        return (
    <ListItem movie={movie} key={movie.id} onMovieClick={onMovieClick} />
    )
    })
    
    return moviesItems


}       

export default MovieList;