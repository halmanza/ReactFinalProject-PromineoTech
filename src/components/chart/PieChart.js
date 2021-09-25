import React,{useEffect} from "react";


import {
  VictoryPie,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const PieChart = ({ work, study, leisure,screen }) => {
   
    useEffect(() => {
        console.log(screen)
    }, [screen])
    
  return (
    <svg viewBox="-100 0 500 250">
    <VictoryPie
    theme={VictoryTheme.material}
      animate={{duration: 3000, onLoad:{duration:100}}}
      standalone={false}
      colorScale={['red','teal','slategrey']}
      width={300} height={300}
      data={[
        { x: 'Studying', y: study}, { x: "Work", y: work }, { x: "FreeTime", y: leisure }
      ]}
      innerRadius={({datum})=>datum.y * 5} labelRadius={50}
      style={{ labels: { fontSize: 12, fill: "black" } }}
    />
    <VictoryLabel
      textAnchor="middle"
      style={{ fontSize: 12 , fill: 'black'}}
      x={150} y={150}
      text="Productivity"
    />

    </svg>
  );
};

export default PieChart;
