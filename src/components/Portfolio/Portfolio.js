import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Particles from "react-particles-js";
import nodeJs from "../../assets/images/node-brands.svg";
import reactLogo from "../../assets/images/icons8-react-native.svg";
import htmlLogo from "../../assets/images/icons8-html-5.svg";
import phpLogo from "../../assets/images/icons8-php-logo.svg";
import reduxLogo from "../../assets/images/icons8-redux.svg";
import cssLogo from "../../assets/images/icons8-css3.svg";
import images1 from "../../assets/images/kovan/1.png";
import data from "../../data/portfolio.json";
import Gallery from "react-grid-gallery";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20vh",
  },
  media: {
    height: 300,
  },
  accordionItem: {
    backgroundColor: "#05386B",
    color: "white",
    textAlign: "center",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  const [portfolioData, setPortfolioData] = useState();
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(image);
  useEffect(() => {
    setPortfolioData(data);
    setIsLoading(false);
    loadImage("kovan");
  }, []);

  const loadImage = (imageName) => {
    let imgArr = [];
    if (imageName === "kovan") {
      for (let i = 1; i <= 9; i++) {
        import(`../../assets/images/${imageName}/1.png`).then((image) => {
          imgArr.push({
            src: image.default,
            thumbnail: image.default,
            thumbnailWidth: 150,
            thumbnailHeight: 250,
            caption: "Choose Group",
          });
        });
      }
      setImage(imgArr);
    }
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        portfolioData.map((item, index) => {
          return (
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionItem}
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {item.projectName}
                  </Typography>
                  <Chip
                    avatar={<Avatar src={reactLogo}></Avatar>}
                    label="React"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.projectDetails}</Typography>
                  <Gallery
                    images={image}
                    backdropClosesModal={true}
                    margin={8}
                  />
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};
export default Portfolio;
