import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, HashRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  root: {
    fontFamily: "Bungee Inline",
    border: 0,
    borderRadius: 3,
    color: "#05386B",
    height: 60,
    width: "100%",
    fontSize: "2.5em",
  },
  flexMenu: {
    display: "inherit",
    marginRight: "5vw",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  button: {
    backgroundColor: "#05386B",
  },
});

const NavBarContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexWrap="nowrap" justifyContent="flex-end" p={1}>
        <Box m={1} alignSelf="flex-start" marginRight="auto">
          Y
        </Box>
        <div className={classes.flexMenu}>
          <Box m={1} marginLeft="10px">
            <Button className={classes.button} variant="contained">
              <Link className={classes.link} to="/about">
                About Me
              </Link>
            </Button>
          </Box>
          <Box m={1}>
            <Button className={classes.button} variant="contained">
              <Link className={classes.link} to="/portfolio">
                Portfolio
              </Link>
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default NavBarContainer;
