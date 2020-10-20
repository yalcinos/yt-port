import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { CardActions, Button, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MdCode, MdLiveTv } from "react-icons/md";
import "../../App.css";
import themeColor from "../../data/color";

const useStyles = makeStyles((theme) => ({
  techIconStyle: {
    color: "#05386B",
    marginRight: "1vw",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  techIconContainer: {
    marginLeft: "1vw",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2vw",
    },
  },
  expand: {
    color: "#05386B",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  buttonContainer: {
    marginRight: "1vw",
    backgroundColor: "#05386b",
    // color: "#edf5e1",
    color: "#05386b",
    "&:hover": {
      backgroundColor: "#092d50",
      boxShadow: "7px 10px 28px 1px rgba(0, 0, 0, 0.24)",
    },
    "&:active": {
      boxShadow: "7px 6px 15px 1px rgba(0, 0, 0, 0.24)",
      transform: "scale(0.97)",
    },
  },

  bottomCard: {
    backgroundColor: "#efefef",
  },
}));
const PortfolioBottom = (props) => {
  const classes = useStyles();

  const handleClick = (webSiteLink) => {
    window.open(webSiteLink, "_blank");
  };

  return (
    <CardActions disableSpacing className={classes.bottomCard}>
      {props.githubLink === "" || props.githubLink === "" ? null : (
        <Button
          className={classes.buttonContainer}
          variant="contained"
          style={{ backgroundColor: themeColor[props.index] }}
          startIcon={<MdCode />}
          onClick={(event) => {
            handleClick(props.githubLink);
          }}
        >
          Source
        </Button>
      )}
      {props.liveDemoIcon === "" || props.liveDemoIcon === "" ? null : (
        <Button
          variant="contained"
          startIcon={<MdLiveTv />}
          className={classes.buttonContainer}
          style={{ color: "white" }}
          onClick={(event) => {
            handleClick(props.liveDemoIcon);
          }}
        >
          Demo
        </Button>
      )}
      <div className={classes.techIconContainer}>
        {props.techIcons.map((tech, index) => {
          return React.createElement(tech, {
            className: classes.techIconStyle,
          });
        })}
      </div>

      <IconButton
        style={{ color: "#edf5e1" }}
        className={clsx(classes.expand, {
          [classes.expandOpen]: props.expanded === props.index,
        })}
        onClick={() => props.expandClickHandler(props.index)}
        aria-expanded={props.expanded === props.index}
        aria-label="show more"
      >
        <ExpandMoreIcon style={{ color: "#05386B" }} />
      </IconButton>
    </CardActions>
  );
};
export default PortfolioBottom;
