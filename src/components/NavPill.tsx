import React from 'react';
import { Link } from 'react-router-dom';

const NavPill = () => {
  return (
    <nav className="nav-pill">
      <Link to="/">Projects</Link>
      <Link to="/about">About</Link>
      <a href="https://drive.google.com/file/d/14foZlnZNb7XwW6z-DDWHRS_2ZmMUwrIL/view" target="_blank" rel="noopener noreferrer">Resume</a>
      <a href="https://www.linkedin.com/in/jshandesign" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  );
};

export default NavPill; 