import React, { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "purple", "yellow", "pink"];

const LazyColor = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      Color Changing Box
    </div>
  );
};

export default LazyColor;
