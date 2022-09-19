import React from "react";
import "./Card.css";


import { Link} from "react-router-dom";


const MovieCard = ({
  movie: { title, description, rating, posterURL, id,trailer },
}) => {

  return (
 
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
      <Link to={`${id}`}  state={{Trailer : trailer , Description : description}} className="link" >see more </Link>
    </div>
 
  );
};

export default MovieCard;
