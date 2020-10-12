import React, { useEffect } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import Container from "@material-ui/core/Container";
import { useDencrypt } from "use-dencrypt-effect";
import Particles from "react-particles-js";
import imgNode from "./assets/images/node-brands.svg";
import { createBrowserHistory } from "history";
import Portfolio from "./components/Portfolio/Portfolio";

const values = ["Hello, I'm Yalcin !"];
const headline = " Frontend Developer | Open-Source Enthusiast | Twin Brothrss";

function App() {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 250);

    return () => clearInterval(action);
  }, []);

  return (
    <HashRouter>
      <div>
        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              number: {
                value: 80,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        {/* <Particles
        style={{ position: "absolute" }}
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
                  src: imgNode,
                  height: 20,
                  width: 23,
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
      /> */}
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <WelcomeText name={result} headLine={headline} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
