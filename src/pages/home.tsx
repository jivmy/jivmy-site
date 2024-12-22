import React, { useEffect, useRef } from 'react';
import '../index.css';
import ColorPalette from '../components/ColorPalette';
import { Rive } from '@rive-app/canvas';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set initial canvas size
    const container = canvasRef.current.parentElement;
    if (container) {
      canvasRef.current.width = container.clientWidth;
      canvasRef.current.height = container.clientHeight;
    }

    const rive = new Rive({
      src: "/rive/button.riv",
      canvas: canvasRef.current,
      autoplay: true,
      stateMachines: "button state",
      onLoad: () => {
        rive.resizeDrawingSurfaceToCanvas();
      }
    });

    // Handle window resizing
    const handleResize = () => {
      if (canvasRef.current && container) {
        canvasRef.current.width = container.clientWidth;
        canvasRef.current.height = container.clientHeight;
        rive.resizeDrawingSurfaceToCanvas();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      rive.cleanup();
    };
  }, []);

  return (
    <div className="wrapper">
      <h1 className="header">Crafting playful interfaces from New York City.</h1>
      <div className="demo-grid">
        <div className="demo">
          <ColorPalette />
        </div>
        <div className="demo">
          <canvas 
            ref={canvasRef}
            className="w-full h-full rounded-lg"
          />
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="demo"></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
