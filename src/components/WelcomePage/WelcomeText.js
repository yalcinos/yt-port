import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typist from "react-typist";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#05386B",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Indie Flower",
  },
  socialIconStyle: {
    color: "#05386B",

    "&:hover": {
      color: "#092d50",
      backgroundColor: "transparent",
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  },
  socialIconContainer: {
    marginTop: "5vh",
    textAlign: "center",
  },
  trial: {
    height: "77vh",
  },
  helloMessage: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Bungee Inline",
    overflow:'hidden',
  },

  [theme.breakpoints.down("sm")]: {
    helloMessage: {
      fontSize: "4.6rem",
    },
  },
}));

const handleClick = (webSiteLink) => {
  window.open(webSiteLink, "_blank");
};
const WelcomeText = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Particles
        height="90vh"
        style={{ position: "absolute" }}
        params={{
          particles: {
            color: {
              value: "#05386B",
            },
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Grid container style={{paddingTop:'100px'}}>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.helloMessage}>
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.paper}>
            <Typist cursor={{ hideWhenDone: "false" }}>
              {props.headLine}
              <Typist.Backspace count={3} delay={200} />
              <span>ter</span>
            </Typist>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.socialIconContainer}>
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
