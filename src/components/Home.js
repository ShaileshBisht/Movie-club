import React, { useState, useEffect } from "react";
import "./Home.css";
import Box from "@material-ui/core/Box";
import API_KEY from "../SecretKey/secretKey";
import axios from "axios";

function Home() {
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en`
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
        Top Rated Movie
      </Box>
    </div>
  );
}

export default Home;
