import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomeText from "./components/WelcomePage/WelcomeText";
import NavBar from "./components/NavBar/NavBarContainer";
function App() {
  return (
    <div>
      <NavBar />
      <WelcomeText />
    </div>
  );
}

export default App;
