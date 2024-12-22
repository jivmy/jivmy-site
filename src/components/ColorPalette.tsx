import React, { useState } from 'react';

const ColorPalette: React.FC = () => {
  const colors = [
    '#FF6B6B',  // Coral Red
    '#4ECDC4',  // Turquoise
    '#45B7D1',  // Sky Blue
    '#96CEB4',  // Sage Green
    '#FFEEAD',  // Cream
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div 
      className="relative w-full h-full rounded-lg cursor-pointer"
      style={{
        backgroundColor: colors[currentColorIndex],
        transition: 'all 0.3s ease'
      }}
      onClick={nextColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md text-sm font-mono">
          {colors[currentColorIndex]}
        </div>
      )}
    </div>
  );
};

export default ColorPalette; 