"use client";

import { FunctionComponent } from "react";

import { useMovies } from "./_hooks/useMovies";

const HomePage: FunctionComponent = () => {
  const movies = useMovies({
    params: {
      language: "en-US",
      page: "1",
    },
    config: {
      onSuccess(res, key, config) {},
      onError(err, key, config) {},
    },
  });

  return (
    <div className="flex flex-wrap md:flex-nowrap bg-dark-90" style={{ minHeight: "calc(100vh - 64px)" }}>
      {movies.data?.results.map((item, index) => (
        <span>{item.title}</span>
      ))}
    </div>
  );
};

export default HomePage;
