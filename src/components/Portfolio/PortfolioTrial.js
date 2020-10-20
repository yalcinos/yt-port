import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Chip,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Button,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { MdCode } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  FaCheckSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import { SiRedux, SiMysql } from "react-icons/si";
import ImageGallery from "./ImageGallery";
// import portfoliosData from "../../data/portfolio.json";
import portfoliosData from "../../data/portfolio";
import { Grid } from "@material-ui/core";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    marginTop: "3vh",
    backgroundColor: "#efefef",
    color: "#edf5e1",
    marginBottom: "2vh",
  },
  gridStyle: {
    flexGrow: 1,
    marginTop: "10vh",
    minHeight: "100px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  avatar: {
    backgroundColor: red[500],
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
  featureContainer: {
    color: "black",
    fontFamily: "Indie Flower",
  },
  strip: {
    height: "15vh",
    padding: 10,
    color: "#05386b",
    // backgroundColor: "#79d1e0",
  },
  bottomCard: {
    backgroundColor: "#efefef",
  },
}));

const PortfolioGallery = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);
  const [imageList, setImageList] = useState([]);
  const [imageListTaskiton, setImageListTaskiton] = useState([]);
  const [imageListOdeyssey, setImageListOdyssey] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState();
  const themeColor = [
    "#e2627d",
    "#ffd7ae",
    "#9ad9ff",
    "#fec5e3",
    "#9fc1ff",
    "#74ffd6",
    "#ff97a2",
    "#a5d0e6",
    "#03c4a1",
    "#79d1e0",
  ];
  const techIcons = [FaReact, FaHtml5, FaCss3, FaNodeJs, SiRedux, SiMysql];

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  useEffect(() => {
    setPortfolioData(portfoliosData);
    setIsLoading(false);
    loadImage("kovan");
    loadImage("taskiton");
    loadImage("odyssey");
  }, []);

  const handleClick = (webSiteLink) => {
    window.open(webSiteLink, "_blank");
  };

  const loadImage = (imageName) => {
    let imgArr = [];
    if (imageName === "kovan") {
      for (let i = 1; i <= 12; i++) {
        import(`../../assets/images/${imageName}/${i}.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 250,
            thumbnailHeight: 320,
          });
        });
      }
      setImageList(imgArr);
    } else if (imageName === "taskiton") {
      for (let i = 1; i <= 6; i++) {
        import(`../../assets/images/${imageName}/${i}.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 400,
            thumbnailHeight: 200,
          });
        });
      }
      setImageListTaskiton(imgArr);
    } else if (imageName === "odyssey") {
      for (let i = 1; i <= 12; i++) {
        import(`../../assets/images/${imageName}/${i}.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 250,
            thumbnailHeight: 320,
          });
        });
      }
      setImageListOdyssey(imgArr);
    }
  };

  return (
    <Grid
      container
      className={classes.gridStyle}
      direction="row"
      alignContent="center"
      justify="center"
    >
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        portfolioData.map((poItem, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} align="center" key={index}>
              <Card className={classes.root}>
                <div
                  className={classes.strip}
                  style={{ backgroundColor: themeColor[index] }}
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
                    {poItem.projectName}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {poItem.projectDetails}
                  </Typography>
                </div>
                <CardContent
                  style={
                    poItem.features.length === 0 ||
                    poItem.features.length === undefined
                      ? { display: "none" }
                      : { height: "25vh" }
                  }
                >
                  <List component="nav" className={classes.featureContainer}>
                    {poItem.features.length === 0 ||
                    poItem.features.length === undefined
                      ? null
                      : poItem.features.map((feature) => {
                          return (
                            <ListItem>
                              <ListItemIcon>
                                <FaCheckSquare color="#05386b" size="1.5em" />
                              </ListItemIcon>
                              <Typography className={classes.featureContainer}>
                                {feature}
                              </Typography>
                            </ListItem>
                          );
                        })}
                  </List>
                  <Divider />
                </CardContent>
                <CardActions disableSpacing className={classes.bottomCard}>
                  {poItem.githubLink === "" ||
                  poItem.githubLink === "" ? null : (
                    <Button
                      className={classes.buttonContainer}
                      variant="contained"
                      style={{ backgroundColor: themeColor[index] }}
                      startIcon={<MdCode />}
                      onClick={(event) => {
                        handleClick(poItem.githubLink);
                      }}
                    >
                      Source
                    </Button>
                  )}
                  {poItem.liveDemo === "" || poItem.liveDemo === "" ? null : (
                    <Button
                      variant="contained"
                      startIcon={<MdLiveTv />}
                      className={classes.buttonContainer}
                      style={{ color: "white" }}
                      onClick={(event) => {
                        handleClick(poItem.liveDemo);
                      }}
                    >
                      Demo
                    </Button>
                  )}

                  <IconButton
                    style={{ color: "#edf5e1" }}
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded === index,
                    })}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded === index}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon style={{ color: "#05386B" }} />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <CardContent>
                    <div className="tag-style-project">
                      {poItem.technologies.length === 0 ||
                      poItem.technologies.length === undefined
                        ? null
                        : poItem.technologies.map((skill, index) => {
                            return (
                              <Chip
                                style={{ backgroundColor: "#edf5e1" }}
                                label={skill}
                                key={index}
                              />
                            );
                          })}
                    </div>
                    <Typography
                      style={{ marginTop: "1vh", color: "#edf5e1" }}
                      paragraph
                    >
                      ScreenShots:
                    </Typography>
                    {poItem.projectName === "Kovan" ? (
                      <ImageGallery imageList={imageList} />
                    ) : poItem.projectName === "Taskiton" ? (
                      <ImageGallery imageList={imageListTaskiton} />
                    ) : poItem.projectName === "Odyssey" ? (
                      <ImageGallery imageList={imageListOdeyssey} />
                    ) : null}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};
export default PortfolioGallery;
