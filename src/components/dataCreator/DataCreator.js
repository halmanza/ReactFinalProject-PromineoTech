import React,{useState,useEffect} from 'react'
import { Container,Col } from 'react-bootstrap'

const DataCreator = () => {
    const [studyingHours,setStudyingHours]= useState({value: '0'});
    
    
    useEffect(()=>{
        console.log(studyingHours);
    },[studyingHours])
    return (
        <Container className="m-2 p-1 justify-content-center">
            <Col className="d-flex flex-column p-2">
            <label htmlFor="dataPointStudying">Select time studying</label>
            <input type="range" value={studyingHours.value} onChange={(e)=>{setStudyingHours({value: e.target.value})}} min="0" max="10" step="1" />
            Hours: {studyingHours.value}
            </Col>
           
            
        </Container>
    )
}

export default DataCreator
