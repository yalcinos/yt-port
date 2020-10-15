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
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImageGallery from "./ImageGallery";
import portfoliosData from "../../data/portfolio.json";
import { Grid } from "@material-ui/core";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "3vh",
    backgroundColor: "#05386B",
    color: "#ffff",
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
}));

const PortfolioGallery = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);
  const [imageList, setImageList] = useState([]);
  const [imageListTaskiton, setImageListTaskiton] = useState([]);
  const [imageListOdeyssey, setImageListOdyssey] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState();

  console.log(portfolioData);
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
            <Grid item xs={12} sm={6} md={4} align="center" key={index}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    {poItem.projectName}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {poItem.projectDetails}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {poItem.githubLink === "" ||
                  poItem.githubLink === "" ? null : (
                    <Button
                      variant="contained"
                      onClick={(event) => {
                        handleClick(poItem.githubLink);
                      }}
                    >
                      Source
                    </Button>
                  )}

                  <IconButton
                    style={{ color: "white" }}
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded === index,
                    })}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded === index}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <CardContent>
                    <div className="tag-style-project">
                      {poItem.technologies.length === 0 ||
                      poItem.technologies.length === undefined
                        ? null
                        : poItem.technologies.map((skill, index) => {
                            return <Chip label={skill} key={index} />;
                          })}
                    </div>
                    <Typography paragraph>ScreenShots:</Typography>
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
