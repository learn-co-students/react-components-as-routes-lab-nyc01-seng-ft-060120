import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDiv = (mov) => {
    return (
      <div>
        <h3>{mov.title}</h3>
        <h4>{mov.time}</h4>
        <ul>{mov.genres.map(g => <li>{g}</li>)}</ul>
      </div>
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(mov => movieDiv(mov))}
    </div>
  );
};

export default Movies;
