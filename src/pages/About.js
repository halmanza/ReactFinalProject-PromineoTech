import React from 'react';
import { Container,Accordion } from 'react-bootstrap';



const About = () => {
    return (
    
    <Container className="d-flex flex-column justify-content-center align-items-center">
            <Container className="d-flex flex-column">
            <h1 style={{textAlign:'center'}}>About</h1>
        <p>Time Consumer is a project to enable visualization of student data to prioritize how 
            a students time is spent. We plan on encorporating more charts and features for users to be able to 
            analyze their productivity. 
        </p>

        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How can you help?</Accordion.Header>
    <Accordion.Body>
      We appreciate all feedback to improve this service and constructive feedback enables us to provide a better 
      result for users. If you notice a particular bug in Time Consumer, please feel free to reach out to me at bugs@timeconsumer.com .
      Currently, the Time Consumer project is a one man show and I do my best to respond within 48 hours of receiving an email.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>I'm a developer and would like to contribute to this project.</Accordion.Header>
    <Accordion.Body>
      If your a developer looking to lend another developer a hand in creating a visualization tool for all people please visit Time Consumer's repo
      at GitHub. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        
        </Container>
        
    </Container>
        
    )
}

export default About;
