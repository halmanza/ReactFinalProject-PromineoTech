import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import DataCreator from "../components/dataCreator/DataCreator";
const Welcome = () => {
  const headingToBeRemoved = useRef(null);
  const paragraphElement = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      headingToBeRemoved.current.style.cssText = `
     color: white;
     transition: 2s;
    
     `;

      setTimeout(() => {
        headingToBeRemoved.current.remove();
        paragraphElement.current.style.cssText = `
      transition:2s;
      color:red;
      `;
      }, 3000);

      
    }, 4000);
  });
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center ">
      <Row className="d-flex flex-column justify-content-center mb-3">
        <h1>Time Consumer</h1>
        <h2 ref={headingToBeRemoved}>A data visualation tool for students</h2>
        <p ref={paragraphElement}>
          If you've had issues tracking your productivity, this application is
          for you!
        </p>
      </Row>

      <Row className="d-flex justify-content-center w-100">
        <small>Please pick your weekly amount of various activities.</small>
        <DataCreator />
      </Row>
    </Container>
  );
};

export default Welcome;
