import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";


const DataGetter = (props) => {
  const [getInfo, setGetInfo] = useState([]);

  const personIdNumber= props.personIdNumber;

  const displaySample=()=>{
   
       return(
           <>
           {getInfo.map((item,index)=>{return <li key={index}>Work: {item.work} Studying: {item.study}  Free Time: {item.free}</li>})}
           </>
           
       )
    
  }

  const getData = async () => {
      try{
        //   replace url with environment 
        let data = await fetch(
            `https://getting.azurewebsites.net/api/HttpTrigger1?code=BACK_URL&id=${personIdNumber}`,
            {
                method: 'GET',
                headers: {"Content-Type" : "application/json"},
                cors: 'cors'
            }
          );
          let processData= await data.json();
          console.log(processData)
          setGetInfo(()=>[...getInfo, processData]);
      }catch(error){
          console.log("No Go! ", error)
      }
    
  };

  useEffect(() => {
    getData();
  }, [])


  return (
  <Container>
        <p>Here is an example of the only data we keep track of when you submit.</p>
        {displaySample()}
      
    </Container>
    )
  
};

export default DataGetter;

DataGetter.propTypes ={
    personIdNumber: PropTypes.number
}