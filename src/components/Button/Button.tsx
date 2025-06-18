import "./Button.css";
import React, { MouseEvent, ReactNode, useState } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  isCancel?: boolean;
  ml?: boolean;
  mr?: boolean;
  mx?: boolean;
  width?: string;
}

const useRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple: Ripple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return { ripples, createRipple };
};

const Button: React.FC<RippleButtonProps> = ({ onClick, children, disabled, isCancel, ml, mr, mx, width }) => {
  const { ripples, createRipple } = useRipple();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onClick?.();
  };

  const marginClass = mx ? "ml mr" : ml ? "ml" : mr ? "mr" : "";

  return (
    <button
      type={isCancel ? "button" : "submit"}
      className={`ripple-button ${isCancel ? "cancel" : ""} ${marginClass}`}
      style={{ width }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
      {ripples.map((ripple) => (
        <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
    </button>
  );
};

const ButtonGroupContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="button-group-container">{children}</div>
);

const ButtonGroupItem: React.FC<
  RippleButtonProps & { active?: boolean }
> = ({ onClick, children, active }) => {
  const { ripples, createRipple } = useRipple();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`button-group-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="button-group-item-content">{children}</div>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
};

export { Button, ButtonGroupContainer, ButtonGroupItem };