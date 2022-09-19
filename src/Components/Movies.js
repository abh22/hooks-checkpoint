import React from "react";
import MovieCard from "./MovieCard";
import "./Card.css";
export default function Movies({ filteredMovies }) {
  return (
    <div className="list">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
