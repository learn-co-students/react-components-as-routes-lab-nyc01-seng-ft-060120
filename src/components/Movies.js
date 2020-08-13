import React from "react";
import { movies } from "../data";

const Movies = (props) => {
  console.log(movies);
let movieGenres = movies.map(movie => (<li>{movie.genres}</li>))
  let moviesList = movies.map((movie) => (
    <div>
      <h3>{movie.title}</h3>
      <p>Duration: {movie.time} minutes</p>
      <ul>
        {movieGenres}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{moviesList}</div>
    </div>
  );
};

export default Movies;
