import React from "react";
import { Container, Row } from "react-bootstrap";
import DataCreator from "../components/dataCreator/DataCreator";
import DataCreatorWorking from "../components/dataCreator/DataCreatorWork";
const Welcome = () => {
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center">
      <h1>Time Consumer</h1>
      <h2>A data visualation tool for students</h2>
      <p>If you've had issues tracking your productivity, this application is for you!</p>
        
      <Row className="justify-content-center w-100">
        <DataCreator />
        <DataCreatorWorking/>
      </Row>
    </Container>
  );
};

export default Welcome;
