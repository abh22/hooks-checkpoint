import React from "react";
import MovieCard from "./MovieCard";

const Filter = ({ data }) => {
  return (
    <div>
      {data.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default Filter;
