import React, { MouseEvent, useState, ReactNode } from "react";
import "./Button.css";

interface RippleButtonProps {
  onClick?: () => void;
  children: ReactNode; // Allow button text or elements
}

const Button: React.FC<RippleButtonProps> = ({ onClick, children }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);

    if (onClick) onClick();
  };

  return (
    <button type="submit" className="ripple-button" onClick={handleClick}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        ></span>
      ))}
    </button>
  );
};

export default Button;