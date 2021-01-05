import React, { useState, useEffect } from "react";
import "./Search.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const [input, setInput] = useState("");

  const searchMovie = (e) => {
    e.preventDefault();
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
      <h1>{input}</h1>
    </div>
  );
}

export default Search;
