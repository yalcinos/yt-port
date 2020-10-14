import React from "react";
import Particles from "react-particles-js";
import nodeJs from "../../assets/images/node-brands.svg";
import reactLogo from "../../assets/images/icons8-react-native.svg";
import htmlLogo from "../../assets/images/icons8-html-5.svg";
import phpLogo from "../../assets/images/icons8-php-logo.svg";
import reduxLogo from "../../assets/images/icons8-redux.svg";
import cssLogo from "../../assets/images/icons8-css3.svg";
const Portfolio = () => {
  return (
    <div>
      COMING SOON...
      <Particles
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: nodeJs,
                  height: 25,
                  width: 25,
                },
                {
                  src: reactLogo,
                  height: 25,
                  width: 25,
                },
                {
                  src: htmlLogo,
                  height: 25,
                  width: 25,
                },
                {
                  src: phpLogo,
                  height: 25,
                  width: 25,
                },
                {
                  src: reduxLogo,
                  height: 25,
                  width: 25,
                },
                {
                  src: cssLogo,
                  height: 25,
                  width: 25,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
};
export default Portfolio;
