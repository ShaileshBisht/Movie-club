import React from "react";
import "./Genres.css";
import Button from "@material-ui/core/Button";

function Genres() {
  return (
    <div className="genres">
      <div className="genres_cate">
        <Button variant="outlined">Action</Button>
        <Button variant="outlined" color="primary">
          Animation
        </Button>
        <Button variant="outlined" color="secondary">
          Comedy
        </Button>
        <Button variant="outlined">Fantasy</Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Science Fiction
        </Button>
      </div>
    </div>
  );
}

export default Genres;
