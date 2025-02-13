import React, { useState, useEffect } from "react";

const LazyTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-4xl font-bold">{time}</h1>;
};

export default LazyTime;
