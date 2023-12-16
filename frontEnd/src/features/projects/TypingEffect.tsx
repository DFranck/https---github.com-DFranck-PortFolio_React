import React, { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, Math.random() * (50 - 20) + 10); // Vitesse aléatoire entre 50 et 150 ms

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <p>{displayedText}</p>;
};

export default TypingEffect;
