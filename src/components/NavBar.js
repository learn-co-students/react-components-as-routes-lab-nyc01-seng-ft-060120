import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" activeStyle={{background: 'pink'}}>Home</NavLink>
      <NavLink to="/movies" activeStyle={{background: 'pink'}}>Movies</NavLink>
      <NavLink to="/actors" activeStyle={{background: 'pink'}}>Actors</NavLink>
      <NavLink to="/directors" activeStyle={{background: 'pink'}}>Directors</NavLink>
    </div>
  );
};

export default NavBar;

// Movies, Actors, Directors
