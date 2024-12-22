import React from 'react';
import '../index.css';
import ColorPalette from '../components/ColorPalette';

const Home = () => (
  <div className="wrapper">
    <h1 className="header">Crafting playful interfaces from New York City.</h1>
    <div className="demo-grid">
      <div className="demo">
        <ColorPalette />
      </div>
      {Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className="demo"></div>
      ))}
    </div>
  </div>
);

export default Home;
