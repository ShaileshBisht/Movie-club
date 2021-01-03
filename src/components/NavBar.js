import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NavBar() {
  const history = useHistory();

  return (
    <div className="navBar">
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="navBar_title"
            variant="h6"
            onClick={(e) => history.push("/")}
          >
            MovieClub
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
