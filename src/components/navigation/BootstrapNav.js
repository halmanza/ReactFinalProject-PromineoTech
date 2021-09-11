import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
const BootstrapNav = () => {
  const [screenSize, setScreenSize] = useState();
  const [logoSize, setLogoSize] = useState();

  const checkScreenSize = () => {
    if (window.screen.width) {
      setScreenSize(window.screen.availWidth);
    }
  };

  useEffect(() => {
    if (screenSize < 400) {
      setLogoSize("2x");
    } else {
      setLogoSize("3x");
    }
    console.log(screenSize);
  }, [screenSize]);

  window.addEventListener("resize", () => {
    checkScreenSize();
  });
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <FontAwesomeIcon
            icon={faHourglassEnd}
            color="white"
            size={logoSize}
            spin
            style={{margin:'.5rem'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-0">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <Nav.Link>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNav;
