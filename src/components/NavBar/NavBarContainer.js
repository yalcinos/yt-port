import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 60,
    width: "100%",
    padding: "0 70px",
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
            About Me
          </Box>
          <Box m={1}>Portfolio</Box>
          <Box m={1}>Contact Me</Box>
        </div>
      </Box>
    </div>
  );
};

export default NavBarContainer;
