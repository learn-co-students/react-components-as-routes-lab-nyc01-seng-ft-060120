import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(obj => <div><h3>Title: "{obj.title}"</h3>
        <p>Time: {obj.time} minutes</p>
        Genres:<ul>{obj.genres.map(genre => <li>{genre}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
