import React, { lazy, Suspense } from "react";

const LazyTime = lazy(() => import("./LazyTime"));
const LazyLetters = lazy(() => import("./LazyLetters"));
const LazyColor = lazy(() => import("./LazyColor"));
const LazyCounter = lazy(() => import("./LazyCounter"));

const LazyComponent = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center items-center h-screen border border-gray-400">
          <LazyTime />
        </div>
        <div className="flex justify-center items-center h-screen border border-gray-400">
          <LazyLetters />
        </div>
        <div className="flex justify-center items-center h-screen border border-gray-400">
          <LazyColor />
        </div>
        <div className="flex justify-center items-center h-screen border border-gray-400">
          <LazyCounter />
        </div>
      </Suspense>
    </div>
  );
};

export default LazyComponent;
