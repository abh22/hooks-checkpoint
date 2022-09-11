import React from "react";
import "./Card.css";


import { Link, Outlet } from "react-router-dom";
import Trailer from "./Trailer";

const MovieCard = ({
  movie: { title, description, rating, posterURL, id },
}) => {
  // const navigation = useNavigate();
  return (
  // <Link to={`movieCard/:${id}`}>
    <div  className="card">
      <p style={{ color: "white", fontSize: 30, fontWeight: 500 }}> {title}</p>
      <img src={posterURL} alt="movie" />
      <p>
        {" "}
        <span style={{ color: "brown", fontWeight: 800 }}>
          Description:
        </span>{" "}
        {description}
      </p>
      <p>
        <span style={{ color: "yellow", fontWeight: 500 }}>Rating:</span>{" "}
        {rating}
      </p>
     <Trailer movies={movies}/>
    </div>
 
  );
};

export default MovieCard;
