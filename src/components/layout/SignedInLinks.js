import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Quiz</NavLink></li>
      <li><NavLink to="/">Logout</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">CC</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
