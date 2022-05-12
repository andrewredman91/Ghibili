import React from 'react';

const ListItem = ({movie, onMovieClick}) => {

    const handleClick = () => {
        onMovieClick(movie);
    }

    return <li onClick={handleClick}>{movie.title}</li>
}

export default ListItem;