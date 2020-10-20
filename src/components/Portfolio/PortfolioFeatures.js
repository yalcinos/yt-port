import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { FaCheckSquare } from "react-icons/fa";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  featureContainer: {
    color: "#05386b",
    fontFamily: "Indie Flower",
  },
}));

const PortfolioFeatures = (props) => {
  const classes = useStyles();
  return (
    <CardContent
      style={
        props.featureLength === 0 || props.featureLength === undefined
          ? { display: "none" }
          : { height: "26vh" }
      }
    >
      <Typography
        variant="subtitle1"
        align="left"
        component="p"
        style={{ paddingLeft: "16px" }}
        className={classes.featureContainer}
      >
        Features;
      </Typography>
      <List component="nav" className={classes.featureContainer}>
        {props.featureLength === 0 || props.featureLength === undefined
          ? null
          : props.features.map((feature) => {
              return (
                <ListItem>
                  <ListItemIcon style={{ minWidth: "30px" }}>
                    <FaCheckSquare color="#05386b" size="1.2em" />
                  </ListItemIcon>
                  <Typography className={classes.featureContainer}>
                    {feature}
                  </Typography>
                </ListItem>
              );
            })}
      </List>
    </CardContent>
  );
};

export default PortfolioFeatures;
