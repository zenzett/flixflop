"use client";

import { FunctionComponent } from "react";

const TrendingMoviesPage: FunctionComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-dark-90" style={{ minHeight: "calc(100vh - 64px)" }}>
      <span>Trending Movies</span>
    </div>
  );
};

export default TrendingMoviesPage;
