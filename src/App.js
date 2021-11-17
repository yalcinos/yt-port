import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import { useDencrypt } from "use-dencrypt-effect";
import AboutMe from "./components/About-me/AboutMe";
import Portfolio from "./components/Portfolio/PortfolioContainer";
const values = ["HELLO, I'M YALCIN !"];
const headline =
  "Software Developer | Open-Source Enthusisat";

function App() {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 250);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <WelcomeText name={result} headLine={headline} />
          </Route>
          <Route path="/about me" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </HashRouter>
  );
}
export default App;
