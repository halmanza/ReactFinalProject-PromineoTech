import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import BootstrapNav from "./components/navigation/BootstrapNav";
import { Container } from "react-bootstrap";

import CurrentTotalData from "./pages/CurrentTotalData";

export const ScreenContext = createContext();

function App() {
  const [screenSize, setScreenSize] = useState();
  const checkScreenSize = () => {
    if (window.screen.width) {
      setScreenSize(window.screen.availWidth);
    }
  };

  const screenCheckObject = {
    size: screenSize,
  };

  window.addEventListener("resize", () => {
    checkScreenSize();
  });
  window.addEventListener("load", () => {
    checkScreenSize();
  });

  return (
    <Container fluid className="p-5 ">
      <Router>
        <BootstrapNav screenSize={screenSize} />

        <ScreenContext.Provider value={screenCheckObject.size}>
          <Route exact path="/">
            <Welcome />
          </Route>
        </ScreenContext.Provider>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/aggregate">
        <CurrentTotalData/>
        </Route>
      </Router>
    </Container>
  );
}

export default App;
