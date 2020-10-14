import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { AiOutlineHeart } from "react-icons/ai";
const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    backgroundColor: "#05386B",
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    width: "100%",
    height: "7vh",
    fontSize: "2.5em",
    color: "#ffffff",
  },
  flexMenu: {
    display: "inherit",
    marginRight: "5vw",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkLogo: {
    textDecoration: "none",
    color: "#05386B",
  },
  button: {
    fontFamily: "Audiowide",
    backgroundColor: "#05386B",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        Made by <AiOutlineHeart /> in Vancouver
      </Typography>
      <Typography>
        &copy; 2013 Friend | Design and Development. All Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;
