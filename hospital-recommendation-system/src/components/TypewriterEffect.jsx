import React, { useState, useEffect } from "react";

const textArray = [
  "Find the best hospitals",
  "Compare hospitals easily",
  "Book an ambulance instantly",
  "Get AI-based recommendations",
];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < textArray[index].length) {
        setText((prev) => prev + textArray[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      } else {
        setIsDeleting(true);
      }
    }, isDeleting ? 50 : 100); // Speed control

    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, index]);

  return (
    <h1 className="typewriter">{text} <span className="cursor">|</span></h1>
  );
};

export default TypewriterEffect;
