import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Divider, CircularProgress } from "@material-ui/core";
import portfoliosData from "../../data/portfolio";
import { Grid } from "@material-ui/core";
import "../../App.css";

//Import sub-components
import PortfolioHeader from "./PortfolioHeader";
import PortfolioFeature from "./PortfolioFeatures";
import PortfolioBottom from "./PortfolioBottom";
import AccordionContainer from "./AccordionContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
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

  expand: {
    color: "#05386B",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
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

  const loadImage = (imageName) => {
    let imgArr = [];
    if (imageName === "kovan") {
      for (let i = 1; i <= 12; i++) {
        import(`../../assets/images/${imageName}/${i}.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 300,
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
            thumbnailWidth: 250,
            thumbnailHeight: 300,
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
            thumbnailWidth: 300,
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
        <CircularProgress style={{ color: "#05386b" }} />
      ) : (
        portfolioData.map((poItem, index) => {
          return (
            <Grid item xs={11} sm={6} md={6} align="center" key={index}>
              <Card className={classes.root}>
                <PortfolioHeader
                  index={index}
                  projectName={poItem.projectName}
                  projectDetails={poItem.projectDetails}
                />
                <PortfolioFeature
                  featureLength={poItem.features.length}
                  features={poItem.features}
                />

                <Divider />
                <PortfolioBottom
                  githubLink={poItem.githubLink}
                  index={index}
                  liveDemoIcon={poItem.liveDemo}
                  techIcons={poItem.techIcons}
                  expanded={expanded}
                  expandClickHandler={handleExpandClick}
                />
                <AccordionContainer
                  expanded={expanded}
                  index={index}
                  key={index}
                  technologiesLength={poItem.technologies}
                  technologies={poItem.technologies}
                  ProjectName={poItem.projectName}
                  imageListKovan={imageList}
                  imageListTaskiton={imageListTaskiton}
                  imageListOdeyssey={imageListOdeyssey}
                />
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};
export default PortfolioGallery;
