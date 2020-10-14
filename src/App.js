import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import { useDencrypt } from "use-dencrypt-effect";
import AboutMe from "./components/About-me/AboutMe";

const values = ["HELLO, I'M YALCIN !"];
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
        <Switch>
          <Route exact path="/">
            <WelcomeText name={result} headLine={headline} />
          </Route>
          <Route path="/about me" component={AboutMe} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
