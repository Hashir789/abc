import './Card.css';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, width = 'auto', height = 'auto', className }, ref) => {
    return (
      <div
        ref={ref}
        className={`card ${className || ''}`}
        style={{ width, height }}
      >
        {children}
      </div>
    );
  }
);

export default Card;