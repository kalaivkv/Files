import React, { useState, useEffect } from "react";

const LazyLetters = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 10) % 400);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <span
        className="text-5xl font-bold absolute"
        style={{ transform: `translateX(${position}px)` }}
      >
       
      </span>
    </div>
  );
};

export default LazyLetters;
