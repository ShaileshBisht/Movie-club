import React, { useState, useEffect } from "react";
import "./Search.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import API_KEY from "../SecretKey/secretKey";

function Search() {
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("");

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputTemp}`
        )
        .then((data) => setMovieData(data.data.results));
    };
    fetchData();
  }, [inputTemp]);

  console.log(movieData);

  const searchMovie = (e) => {
    e.preventDefault();
    setInputTemp(input);
    setInput("");
  };

  return (
    <div className="search">
      <form className="search_input" onSubmit={searchMovie}>
        <TextField
          className="search_input1"
          label="Search Movies"
          margin="normal"
          variant="outlined"
          value={input}
          placeholder="Enter Movie Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={searchMovie}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default Search;
