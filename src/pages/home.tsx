import React, { useEffect, useRef } from 'react';
import '../index.css';
import ColorPalette from '../components/ColorPalette';
import * as rive from '@rive-app/canvas';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveRef = useRef<rive.Rive | null>(null);

  useEffect(() => {
    const initRive = async () => {
      if (!canvasRef.current) return;

      try {
        // Initialize Rive animation
        riveRef.current = new rive.Rive({
          src: "/rive/button.riv",
          canvas: canvasRef.current,
          autoplay: true,
          stateMachines: "button state",
          onLoad: () => {
            if (riveRef.current) {
              riveRef.current.resizeDrawingSurfaceToCanvas();
            }
          }
        });

        // Handle window resizing
        const handleResize = () => {
          if (riveRef.current) {
            riveRef.current.resizeDrawingSurfaceToCanvas();
          }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          if (riveRef.current) {
            riveRef.current.cleanup();
          }
        };
      } catch (error) {
        console.error("Error initializing Rive:", error);
      }
    };

    initRive();
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
