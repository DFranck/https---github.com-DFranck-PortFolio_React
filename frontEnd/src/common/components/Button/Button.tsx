import React from "react";
import "./Button.scss";
interface ButtonProps {
  text: string;
  onClick?: () => void; // Ajoutez cette ligne pour accepter une fonction onClick
}
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};
