import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Rockwell Nova",
  },
  socialIconStyle: {
    textAlign: "center",
  },
}));
const WelcomeText = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.paper}>
            Hello, I'm {props.name} !
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.paper}>
            Frontend Developer | Open-Source Enthusiast | Twins
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.socialIconStyle}>
            <FacebookIcon style={{ fontSize: 50, marginRight: "10px" }} />
            <GitHubIcon style={{ fontSize: 50, marginRight: "10px" }} />
            <LinkedInIcon style={{ fontSize: 50 }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeText;
