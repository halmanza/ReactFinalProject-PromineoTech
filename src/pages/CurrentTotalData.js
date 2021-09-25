import React from 'react'
import { Container } from 'react-bootstrap';
import DataCollector from '../components/apiCollector/DataCollector';
import DataGetter from '../components/apiCollector/DataGetter';

const CurrentTotaldata = () => {

    
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <h1>Aggregate Data</h1>

            <p>To provide transparency with out product we have done some visualization with data volunteered
                with us from various students that use our service. 
            </p>
            <DataGetter personIdNumber={1}/>

            

            
            
            
        </Container>
    )
}

export default CurrentTotaldata;
