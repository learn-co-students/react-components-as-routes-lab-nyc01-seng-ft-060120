import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ genres, metascore, time, title }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <p>{time} minutes</p>
          <p>Metascore: {metascore || 0}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default Movies;
