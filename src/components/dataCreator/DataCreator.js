import React, { useState, useEffect,useContext } from "react";
import { Container, Col } from "react-bootstrap";
import PieChart from '../chart/PieChart';
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
 
  const screenValue= useContext(ScreenContext);

  const pieChartValues=()=>{
      if(totalHours.total !== 0){
        return <PieChart work={totalHours.workHours} study={totalHours.studyHours} leisure={totalHours.freeTime} screen={screenValue}/>
      }
  }

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

    
  });
  return (
    <Container className="m-2 p-1 justify-content-center">
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

      {finalValueButton()}

      {pieChartValues()}
    </Container>
  );
};

export default DataCreator;
