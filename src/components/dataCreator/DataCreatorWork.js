import React,{useState,useEffect} from 'react'
import { Container,Col } from 'react-bootstrap'

const DataCreatorWorking = () => {
    const [workingHours,setWorkingHours]= useState({value: '0'});
    
    
    useEffect(()=>{
        console.log(workingHours);
    },[workingHours])
    return (
        <Container className="m-2 p-1 justify-content-center">
            <Col className="d-flex flex-column p-2">
            <label htmlFor="dataPointWorking">Select time Working</label>
            <input type="range" value={workingHours.value} onChange={(e)=>{setWorkingHours({value: e.target.value})}} min="0" max="10" step="1" />
            Hours: {workingHours.value}
            </Col>
           
            
        </Container>
    )
}

export default DataCreatorWorking
