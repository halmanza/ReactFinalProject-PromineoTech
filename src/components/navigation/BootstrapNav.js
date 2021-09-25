import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
const BootstrapNav = ({ screenSize }) => {
  const [logoSize, setLogoSize] = useState();
  const [logoColor, setLogoColor] = useState("white");

  useEffect(() => {
    if (screenSize < 400) {
      setLogoSize("1x");
    } else {
      setLogoSize("2x");
    }
   
  }, [screenSize]);

  return (
    <Container className="mb-5">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className="p-0">
          <Navbar.Brand>
            <FontAwesomeIcon
              icon={faAsterisk}
              color={logoColor}
              size={logoSize}
              pulse
              style={{ margin: ".1rem" }}
              onClick={() =>
                logoColor === "white"
                  ? setLogoColor("red")
                  : setLogoColor("white")
              }
              cursor="pointer"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-0">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to ="/about">
              <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to ="/aggregate">
              <Nav.Link>Agreggate Data</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default BootstrapNav;
