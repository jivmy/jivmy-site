import React from 'react';
import '../index.css';
import { useRive } from '@rive-app/react-canvas';

const Home = () => {
  const { RiveComponent } = useRive({
    src: "/rive/button.riv",
    stateMachines: "button state",
    autoplay: true,
    isTouchScrollEnabled: true,
  });

  return (
    <div className="wrapper">
      <h1 className="header">Crafting playful interfaces from New York City</h1>
      <div className="demo-grid">
        <div className="demo">
          <RiveComponent className="w-full h-full rounded-lg" />
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <div key={index} className="demo"></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
