import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImageGallery from "./ImageGallery";
import portfoliosData from "../../data/portfolio.json";
import { Grid } from "@material-ui/core";
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
  }, []);

  console.log(imageList);

  const loadImage = (imageName) => {
    let imgArr = [];
    if (imageName === "kovan") {
      for (let i = 1; i <= 9; i++) {
        import(`../../assets/images/${imageName}/${i}.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 320,
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
            thumbnailWidth: 320,
            thumbnailHeight: 320,
          });
        });
      }
      setImageListTaskiton(imgArr);
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
                  <IconButton
                    style={{ color: "white" }}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </IconButton>
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
                    <Typography paragraph>ScreenShots:</Typography>
                    {poItem.projectName === "Kovan" ? (
                      <ImageGallery imageList={imageList} />
                    ) : poItem.projectName === "Taskiton" ? (
                      <ImageGallery imageList={imageListTaskiton} />
                    ) : (
                      <ImageGallery imageList={imageList} />
                    )}
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
