import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const RegularChart = (props) => {
  const values = [
    { activity: "studying", hours: props.studyHours ,fill:"red"},
    { activity: "working", hours: props.workHours , fill: "blue"},
    { activity: "free time", hours: props.freeTime, fill:"salmon" },
    {activity: 'Total hours', hours: props.totalHours, fill:"green"}
  ];

  return (
    <VictoryChart width={800} animate={{duration: 2000, onLoad: {duration: 300}}} domainPadding={props.screen} style={{background: {fill: 'darkgrey'}}}  theme={VictoryTheme.material}>
    
      <VictoryBar style={{data: {fill: 'red'}}} data={values}
      x="activity" y="hours" />
    </VictoryChart>
  );
};

export default RegularChart;
