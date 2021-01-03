import React from "react";
import "./MovieCard.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

function MovieCard({ info }) {
  return (
    <div className="movieCard">
      <Card className="card">
        <CardMedia
          className="movieCard_media"
          image={`https://image.tmdb.org/t/p/original${info.poster_path}`}
          title={info.strDrink}
        />
        <CardContent>
          <Box
            fontWeight="fontWeightBold"
            fontSize={25}
            textAlign="center"
            letterSpacing={3}
            lineHeight={2}
            m={1}
          >
            {info.strDrink}
          </Box>

          <Box
            fontWeight="fontWeightRegular"
            fontSize={18}
            fontFamily="Monospace"
            textAlign="center"
            m={1}
            fontStyle="oblique"
            className="card_instruction"
          >
            {info.strInstructions}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieCard;
