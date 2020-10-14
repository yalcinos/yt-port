import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Particles from "react-particles-js";
import nodeJs from "../../assets/images/node-brands.svg";
import reactLogo from "../../assets/images/icons8-react-native.svg";
import htmlLogo from "../../assets/images/icons8-html-5.svg";
import phpLogo from "../../assets/images/icons8-php-logo.svg";
import reduxLogo from "../../assets/images/icons8-redux.svg";
import cssLogo from "../../assets/images/icons8-css3.svg";
import images1 from "../../assets/images/kovan/1.png";
import data from "../../data/portfolio.json";
import CircularProgress from "@material-ui/core/CircularProgress";

console.log(images1);
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // backgroundColor:"#05386B"
  },
  media: {
    height: 300,
  },
});

const Portfolio = () => {
  const classes = useStyles();

  const [portfolioData, setPortfolioData] = useState();
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(image[1]);
  const a = image[1];
  useEffect(() => {
    setPortfolioData(data);
    getImagesByProjectName("kovan");
  }, []);

  const getImagesByProjectName = (projectName) => {
    const imageArray = [];
    if (projectName === "kovan") {
      for (let i = 1; i <= 9; i++) {
        import(`../../assets/images/${projectName}/${i}.png`).then((image) => {
          imageArray.push(image);
        });
      }
      setImage(imageArray);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading || !image.length ? (
        <h1>LOADING...</h1>
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image[1].default}
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View Source Code
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
export default Portfolio;
