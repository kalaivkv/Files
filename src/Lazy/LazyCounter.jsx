import React, { useState, useEffect } from "react";

const LazyCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-6xl font-bold">{count}</h1>;
};

export default LazyCounter;
