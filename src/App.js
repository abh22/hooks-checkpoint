// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The shawshank redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",

      rating: 9.2,
    },
    {
      title: " The Silence of the Lambs",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: 8.6,
    },
    {
      title: "Taxi Driver",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 8.2,
    },
    {
      title: "Midsommar",
      description:
        "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDZjZWE0ZjktZjBlOS00YmFiLWFlYjctY2IwZmUxMzQyZjUyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating: 8.2,
    },
    {
      title: "The shining",
      description:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      rating: 8.4,
    },
  ]);
  const addMovie = (movie) => {
    setMovies([...movies, movie] );
  };
  
  

  const [search, setNewSearch] = useState("");
 
 const searchMovie = (movies)=> {
  var arr =[];
 return select==="" && search===""?
 arr:
 select!==""?
 movies.filter((item)=> Math.floor(item.rating)==select):
      
 search!==""? 
    
    movies.filter((item) => 
     item.title.toLowerCase().includes(search.toLowerCase())):
     movies.filter((item)=> (Math.floor(item.rating)==select) && (item.title.toLowerCase().includes(search.toLowerCase()) ))
     
};
const [visible,setVisible]=useState(false);


const [select, setSelect] = useState("")

  return (
    <div className="App">
      <p className="App-header">Movies4u</p>
      <h3> Filtered Search: {" "}</h3>
       
       <input type="text" placeholder="Insert a term for your search"  onChange={(e)=> setNewSearch(e.target.value) && setVisible(false)}/> 
       
       <label for="rating-select"> filter by rating: </label>
       <select value={select} onChange={(e)=> setSelect(e.target.value) }  class="form-control">
       <option value="">--Please choose an option--</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>

</select>
<button onClick={()=>setVisible(true)} >search</button>
     { visible &&
        <Filter data={searchMovie(movies)} />}
     
   
      <MovieList movies={movies} addMovie={addMovie}  />
<footer>
 <div > all rights reserved</div>
  
</footer>
    </div>
  );
};
export default App;
