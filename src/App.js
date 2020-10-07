import React, { useEffect } from "react";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import Container from "@material-ui/core/Container";
import { useDencrypt } from "use-dencrypt-effect";
import Particles from "react-particles-js";

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
    <div>
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            number: {
              value: 50,
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
      <NavBar />
      <Container>
        <WelcomeText name={result} headLine={headline} />
      </Container>
    </div>
  );
}

export default App;
