import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  root: {
    fontFamily: "Audiowide",
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
    color: "#edf5e1",
  },
  linkLogo: {
    textDecoration: "none",
    color: "#05386B",
  },
  button: {
    fontFamily: "Audiowide",
    backgroundColor: "#05386B",
    "&:hover": {
      backgroundColor: "#092d50",
      boxShadow: "7px 10px 28px 1px rgba(0, 0, 0, 0.24)",
    },
    "&:active": {
      boxShadow: "7px 6px 15px 1px rgba(0, 0, 0, 0.24)",
      transform: "scale(0.97)",
    },
  },
});

const NavBarContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexWrap="nowrap" justifyContent="flex-end" p={1}>
        <Box m={1} alignSelf="flex-start" marginRight="auto" marginLeft="2vw">
          <Link className={classes.linkLogo} to="/">
            Y
          </Link>
        </Box>
        <div className={classes.flexMenu}>
          <Box m={1} marginLeft="10px">
            <Button className={classes.button} variant="contained">
              <Link className={classes.link} to="/portfolio">
                Portfolio
              </Link>
            </Button>
          </Box>
          <Box m={1}>
            <Button className={classes.button} variant="contained">
              <Link className={classes.link} to="/about me">
                About Me
              </Link>
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default NavBarContainer;
