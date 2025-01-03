import React, { useState, useEffect } from 'react';

interface RippleProps {
  duration?: number;
}

interface RippleStyle {
  left: number;
  top: number;
  width: number;
  height: number;
}

const Ripple: React.FC<RippleProps> = ({ duration = 200 }) => {
  const [ripples, setRipples] = useState<RippleStyle[]>([]);

  useEffect(() => {
    const cleanup = () => {
      setRipples([]);
    };

    return cleanup;
  }, []);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    setRipples([...ripples, {
      left: event.clientX - rect.left - radius,
      top: event.clientY - rect.top - radius,
      width: diameter,
      height: diameter
    }]);
  };

  return (
    <div 
      className="ripple-container" 
      onMouseDown={addRipple}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        borderRadius: 'inherit',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)'
      }}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            transform: 'scale(0)',
            borderRadius: '100%',
            animation: `ripple ${duration}ms linear`,
            backgroundColor: 'rgba(69, 166, 255, 0.15)',
            ...ripple
          }}
        />
      ))}
    </div>
  );
};

export default Ripple; 