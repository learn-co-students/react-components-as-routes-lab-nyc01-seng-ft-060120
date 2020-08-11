import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDiv = (dir) => {
    return (
      <div>
        {dir.name}
        <ul>{dir.movies.map(m => <li>{m}</li>)}</ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => directorDiv(dir))}
    </div>
  );
}

export default Directors
