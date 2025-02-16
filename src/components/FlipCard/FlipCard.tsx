import './FlipCard.css';
import { FC, useState, ReactNode, MouseEvent } from 'react';

const FlipCard: FC<{ children: ReactNode; width?: string, maxWidth?: string }> = ({ children, width = '100vw', maxWidth = '400px' }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (event: MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.target as HTMLElement;
    
    if (clickedElement.getAttribute("data-flip-action") === "true") {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div className="flip-card" style={{ width, maxWidth }}>
      <div className={`flip-card-content ${flipped ? 'flipped' : ''}`}  onClick={handleFlip}>
        {children}
      </div>
    </div>
  );
};

const FlipCardFrontSide: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flip-card-front">{children}</div>;
};

const FlipCardBackSide: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flip-card-back">{children}</div>;
};

export { FlipCard, FlipCardFrontSide, FlipCardBackSide };