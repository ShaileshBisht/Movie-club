import React, { useState, useEffect } from "react";
import "./Home.css";
import MovieCard from "./MovieCard";
import Box from "@material-ui/core/Box";
import API_KEY from "../SecretKey/secretKey";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

function Home() {
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`
        )
        .then((data) => setMovieData(data.data.results));
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <Box
        lineHeight={3}
        textAlign="center"
        fontSize={30}
        fontWeight="fontWeightBold"
        letterSpacing={10}
        m={1}
      >
        Top Popular Movie
      </Box>

      <Grid justify="space-evenly" container spacing={4}>
        {movieData.map((item) => (
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <MovieCard key={item.id} info={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
