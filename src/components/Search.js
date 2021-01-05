import React from "react";
import "./Search.css";
import TextField from "@material-ui/core/TextField";

function Search() {
  return (
    <div className="search">
      <div className="search_input">
        <TextField
          className="search_input1"
          label="Search Movies"
          margin="normal"
          variant="outlined"
          placeholder="Enter Movie Name"
        />
      </div>
    </div>
  );
}

export default Search;
