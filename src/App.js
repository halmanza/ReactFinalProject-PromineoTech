import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import BootstrapNav from "./components/navigation/BootstrapNav";
import { Container } from "react-bootstrap";
import './app.css'
function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <BootstrapNav />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
