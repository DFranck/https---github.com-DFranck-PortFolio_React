import React from "react";
import "./Button.scss";
interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void; // Ajoutez cette ligne pour accepter une fonction onClick
}
export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
