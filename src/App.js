import React from "react";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <WelcomeText name={"Yalcin"} />
      </Container>
    </div>
  );
}

export default App;
