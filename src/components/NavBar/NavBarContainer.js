import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, HashRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 60,
    width: "100%",
    fontSize: "1.25em",
  },
  flexMenu: {
    display: "inherit",
    marginLeft: "60%",
    marginRight: "10%",
  },
});

const NavBarContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexWrap="nowrap" p={1}>
        <Box m={1} alignSelf="flex-start">
          Y
        </Box>
        <div className={classes.flexMenu}>
          <Box m={1} marginLeft="10px">
            <Button variant="contained">
              <Link to="/about">About Me</Link>
            </Button>
          </Box>
          <Box m={1}>
            <Button variant="contained">
              <Link to="/portfolio">Portfolio</Link>
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default NavBarContainer;
