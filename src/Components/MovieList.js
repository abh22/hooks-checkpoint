import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./Card.css";
import PropTypes  from "prop-types";
const MovieList = ({ movies ,addMovie}) => {
  MovieList.propTypes={
    
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      posterURL: PropTypes.string.isRequired,
  }
  const [formValue, setFormValue] = useState({title: "",description: "",rating: ""});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const handleChange = (e) => {
   const  value = e.target.value
    setFormValue({...formValue,[e.target.name]:value})
  };
  return (
    <div>
      <h1>Your List</h1>
      
      <div className="list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      <form  onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" placeholder="Movie Name" onChange={handleChange}/>
          <input  type="text"name="description" placeholder="Please add a description" onChange={handleChange} />
          <input type="text" name="rating" placeholder="Please add the Rating" onChange={handleChange}/>
          <input type="text" name="posterURL" placeholder="Please add poster URL" onChange={handleChange}/>
          <button onClick={() => addMovie(formValue)} type="submit">Add your movie</button>
        </div>
        {console.log(formValue)}
      </form>
    </div>
  );
};

export default MovieList;
