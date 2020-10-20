import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import themeColor from "../../data/color";
import { Typography, CircularProgress } from "@material-ui/core";

import "../../App.css";
const useStyles = makeStyles((theme) => ({
  strip: {
    padding: 10,
    color: "#05386b",
    height: "15vh",
  },
}));
const PortfolioHeader = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.strip}
      style={{ backgroundColor: themeColor[props.index] }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        style={{
          textAlign: "center",
          fontFamily: "Bungee Inline",
          fontWeight: "bold",
        }}
      >
        {props.projectName}
      </Typography>
      <Typography variant="body2" component="p">
        {props.projectDetails}
      </Typography>
    </div>
  );
};

export default PortfolioHeader;
