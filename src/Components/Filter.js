import React from "react";

import { useState } from "react";

import Movies from "./Movies";
const Filter = ({ movies }) => {
  const [visible, setVisible] = useState(false);
  const [search, setNewSearch] = useState("");
  const [select, setSelect] = useState("");
  const searchMovie = ({ movies }) => {
    var arr = [];
    return select === "" && search === ""
      ? arr
      : select !== ""
      ? movies.filter((item) => Math.floor(item.rating) == select)
      : search !== ""
      ? movies.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : movies.filter(
          (item) =>
            Math.floor(item.rating) == select &&
            item.title.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div>
      <h3> Filtered Search: </h3>

      <input
        type="text"
        placeholder="Insert a term for your search"
        onChange={(e) => setNewSearch(e.target.value) && setVisible(false)}
      />

      <label for="rating-select"> filter by rating: </label>
      <select
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        class="form-control"
      >
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
      <button onClick={() => setVisible(true)}>search</button>
      {visible ? (
        <Movies filteredMovies={searchMovie({ movies })} />
      ) : (
        "no search"
      )}
    </div>
  );
};

export default Filter;
