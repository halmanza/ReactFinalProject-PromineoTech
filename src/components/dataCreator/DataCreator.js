import React, { useState, useEffect, useContext } from "react";
import { Container, Col } from "react-bootstrap";
import PieChart from "../chart/PieChart";
import RegularChart from "../chart/RegularChart";
import { ScreenContext } from "../../App";

//Component that collects user input in ranges for hours workingk,studying, and leisure time.
//It also delivers the inputed value to a graph component for visualization.
const DataCreator = () => {
  const [studyingHours, setStudyingHours] = useState({ value: "0" });
  const [workingHours, setWorkingHours] = useState({ value: "0" });
  const [freeHours, setFreeHours] = useState({ value: "0" });
  const [totalHours, setTotalHours] = useState({
    studyHours: 0,
    workHours: 0,
    freeTime: 0,
    total: 0,
  });
  const [graphType, setGraphType] = useState({circular: true, bar: false});

  const screenValue = useContext(ScreenContext);

  

  const ChartValues = () => {
    if (totalHours.total !== 0 && graphType.circular == true) {
      return (
        <div>
          <PieChart
            work={totalHours.workHours}
            study={totalHours.studyHours}
            leisure={totalHours.freeTime}
            screen={screenValue}
          />
        </div>
      );
    }else if(totalHours.total !== 0 && graphType.bar == true){
      return(
        <div>
              <RegularChart
            workHours={totalHours.workHours}
            studyHours={totalHours.studyHours}
            freeTime={totalHours.freeTime}
            totalHours={totalHours.total}
            screen={screenValue / 4}
          />
        </div>
      )
    }
    
  };

  const finalValueButton = () => {
    const resetvalues = {
      studyHours: 0,
      workHours: 0,
      freeTime: 0,
      total: 0,
    };
    const resetInitialValues = {
      value: 0,
    };
    if (
      Number(studyingHours.value) !== 0 ||
      Number(workingHours.value) !== 0 ||
      Number(freeHours.value) !== 0
    ) {
      return (
        <>
          <button
            onClick={() => {
              setTotalHours({
                studyHours: Number(studyingHours.value),
                workHours: Number(workingHours.value),
                freeTime: Number(freeHours.value),
                total:
                  Number(studyingHours.value) +
                  Number(workingHours.value) +
                  Number(freeHours.value),
              });
            }}
          >
            Submit Data
          </button>
          <button
            onClick={() => {
              setTotalHours(resetvalues);
              setStudyingHours(resetInitialValues);
              setWorkingHours(resetInitialValues);
              setFreeHours(resetInitialValues);
            }}
          >
            Reset Values
          </button>
        </>
      );
    }
  };
  useEffect(() => {
    console.log(
      "Study ",
      studyingHours.value,
      "Work ",
      workingHours.value,
      "Leisure ",
      freeHours.value
    );
    console.log(screenValue);
  });

  return (
    
    <Container className="m-2 p-1 justify-content-center">
      {ChartValues()}
      <Col className="d-flex flex-column p-2">
        <label htmlFor="dataPointStudying">Select time studying</label>
        <input
          type="range"
          value={studyingHours.value}
          onChange={(e) => {
            setStudyingHours({ value: e.target.value });
          }}
          min="0"
          max="40"
          step="1"
        />
        Hours: {studyingHours.value}
      </Col>

      <Col className="d-flex flex-column p-2">
        <label htmlFor="dataPointWorking">Select time working</label>
        <input
          type="range"
          value={workingHours.value}
          onChange={(e) => {
            setWorkingHours({ value: e.target.value });
          }}
          min="0"
          max="40"
          step="1"
        />
        Hours: {workingHours.value}
      </Col>

      <Col className="d-flex flex-column p-2">
        <label htmlFor="dataPointLeisure">Select amount of leisure time</label>
        <input
          type="range"
          value={freeHours.value}
          onChange={(e) => {
            setFreeHours({ value: e.target.value });
          }}
          min="0"
          max="40"
          step="1"
        />
        Hours: {freeHours.value}
      </Col>

      <Col className="d-flex  p-1">
          
          
        <input type="radio" name="graph" id="circular" value="circular" onClick={()=>{setGraphType({circular:true, bar:false})}}/>
        <label htmlFor="circular">Circle Graph</label>
         
        <input type="radio" name="graph" id="bar" value='bar' onClick={()=>{setGraphType({circular:false, bar: true})}}  />
        <label htmlFor="bar">Bar Graph </label>
        

      </Col>

      {finalValueButton()}

      
    </Container>
  );
};

export default DataCreator;
