// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";

import { Link, Route, Routes } from "react-router-dom";
import MovieRoute from "./Components/MovieRoute";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The shawshank redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",

      rating: 9.2,
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: 2,
      title: " The Silence of the Lambs",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: 8.6,
      trailer: "https://www.youtube.com/embed/V5dA92wqmME",
    },
    {
      id: 3,
      title: "Taxi Driver",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 8.2,
      trailer: "https://www.youtube.com/embed/UUxD4-dEzn0",
    },
    {
      id: 4,
      title: "Midsommar",
      description:
        "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDZjZWE0ZjktZjBlOS00YmFiLWFlYjctY2IwZmUxMzQyZjUyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating: 8.2,
      trailer: "https://www.youtube.com/embed/xb-lGS5RV5A",
    },
    {
      id: 5,
      title: "The shining",
      description:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      rating: 8.4,
      trailer: "https://www.youtube.com/embed/5Cb3ik6zP2I",
    },
  ]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <p className="App-header">Movies4u</p>

      <Link to="/">Home</Link>
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieList movies={movies} addMovie={addMovie} />}
        />
        <Route path="/:id" element={<MovieRoute movies={movies} />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<MovieList/>}></Route>
      
          <Route path="moviedetails/:id" element={<Trailer movies={movies} />}/>
       
      </Routes> */}
      <footer>
        <div> all rights reserved</div>
      </footer>
    </div>
  );
};
export default App;
