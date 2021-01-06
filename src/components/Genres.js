import React, { useState, useEffect } from "react";
import "./Genres.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import API_KEY from "../SecretKey/secretKey";
import MovieCard from "./MovieCard";
import { Grid } from "@material-ui/core";

function Genres() {
  const [token, setToken] = useState("27");
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${token}`
        )
        .then((data) => setMovieData(data.data.results));
    };
    fetchData();
  }, [token]);

  return (
    <div className="genres">
      <div className="genres_cate">
        <Button variant="outlined" onClick={(e) => setToken("28")}>
          Action
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => setToken("16")}
        >
          Animation
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => setToken("36")}
        >
          History
        </Button>
        <Button variant="outlined" onClick={(e) => setToken("27")}>
          Horror
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="#outlined-buttons"
          onClick={(e) => setToken("878")}
        >
          Science Fiction
        </Button>
      </div>

      <Grid justify="space-evenly" container spacing={0}>
        {movieData.map((item) => (
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <MovieCard key={item.id} info={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Genres;
