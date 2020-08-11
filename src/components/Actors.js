import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDiv = (act) => {
    return (
      <div>
        {act.name}
        <ul>{act.movies.map(m => <li>{m}</li>)}</ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(act => actorDiv(act))}
    </div>
  );
};

export default Actors;
