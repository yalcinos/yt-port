import React, { useEffect } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import Container from "@material-ui/core/Container";
import { useDencrypt } from "use-dencrypt-effect";
import imgNode from "./assets/images/node-brands.svg";
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
