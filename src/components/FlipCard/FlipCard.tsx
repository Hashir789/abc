import './FlipCard.css';
import React, { useState, ReactNode } from 'react';

const FlipCard: React.FC<{ children: ReactNode; width?: string | number }> = ({ children, width = '400px' }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.target as HTMLElement;
    
    if (clickedElement.getAttribute("data-flip-action") === "true") {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div className="flip-card" style={{ width }}>
      <div className={`flip-card-content ${flipped ? 'flipped' : ''}`}  onClick={handleFlip}>
        {children}
      </div>
    </div>
  );
};

const FlipCardFrontSide: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flip-card-front">{children}</div>;
};

const FlipCardBackSide: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flip-card-back">{children}</div>;
};

export { FlipCard, FlipCardFrontSide, FlipCardBackSide };