import { Grid, Typography, IconButton, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from '@material-ui/icons/GetApp';
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
  downloadIcon: {
    fontFamily: "Audiowide",
    backgroundColor: "#05386B",
    color: "#edf5e1",
    "&:hover": {
      backgroundColor: "#092d50",
      boxShadow: "7px 10px 28px 1px rgba(0, 0, 0, 0.24)",
    },
    "&:active": {
      boxShadow: "7px 6px 15px 1px rgba(0, 0, 0, 0.24)",
      transform: "scale(0.97)",
    },
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
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom:'10%',
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
  footer: {
    position:"absolute",
    textAlign:'center', 
    bottom:0,
    backgroundColor: 'inherit',
    width:'100%',
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
            <Typist.Delay ms={2000} />
              {props.headLine}
              <Typist.Backspace count={3} delay={200} />
              <span>ast</span>
            </Typist>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{textAlign: "center", marginTop: "16px"}}>
        <Button
              className={classes.downloadIcon}
              variant="contained"
              startIcon={<GetAppIcon/>}
              onClick={(even) => {
                handleClick("https://docs.google.com/document/d/1rr4558tewOD7VsJP2Wc2IqMkO__kfCczmmASgYosoI0/export?format=pdf")
              }}
            >
              Resume
          </Button>
        </Grid>
      
      </Grid>
      <Box className={classes.footer}>
            <IconButton
              className={classes.socialIconStyle}
              onClick={(event) => {
                handleClick("https://github.com/yalcinos");
              }}
            >
              <GitHubIcon style={{ fontSize: 50, marginBottom: "10px" }} />
            </IconButton>
            <IconButton
              className={classes.socialIconStyle}
              onClick={(event) => {
                handleClick("https://www.linkedin.com/in/yalcin-tatar/");
              }}
            >
              <LinkedInIcon style={{ fontSize: 50, marginBottom: "10px" }} />
            </IconButton>
      </Box>
    </div>
  );
};

export default WelcomeText;
