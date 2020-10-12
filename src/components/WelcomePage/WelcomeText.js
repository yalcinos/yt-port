import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Rockwell Nova",
  },
  socialIconStyle: {
    color: "white",
    textAlign: "center",
  },
}));

const handleClick = (webSiteLink) => {
  window.open(webSiteLink, "_blank");
};
const WelcomeText = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.paper}>
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.paper}>
            <Typist cursor={{ hideWhenDone: "false" }}>
              {props.headLine}
              <Typist.Backspace count={3} delay={200} />
              <span>ers</span>
            </Typist>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.socialIconStyle}>
            <IconButton
              className={classes.socialIconStyle}
              onClick={(event) => {
                handleClick("https://www.facebook.com/yalcin.tatar1");
              }}
            >
              <FacebookIcon style={{ fontSize: 50, marginRight: "10px" }} />
            </IconButton>
            <IconButton
              className={classes.socialIconStyle}
              onClick={(event) => {
                handleClick("https://github.com/yalcinos");
              }}
            >
              <GitHubIcon style={{ fontSize: 50, marginRight: "10px" }} />
            </IconButton>
            <IconButton
              className={classes.socialIconStyle}
              onClick={(event) => {
                handleClick("https://www.linkedin.com/in/yalcin-tatar/");
              }}
            >
              <LinkedInIcon style={{ fontSize: 50, marginRight: "10px" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeText;
