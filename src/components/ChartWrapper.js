import React from "react";
import styled from "styled-components"


const Chart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    height: min-content;
  `;

const ChartHeader = styled.div`
    border: 2px solid green;
  `;

const ChartMain = styled.div`
    border: 3px solid red;
    margin: 1rem;
    height: min-content;
    justify-self: center;
  `;

const ChartWrapper = ({chartName, children}) => {

  return (
    <Chart>
      <ChartHeader>
        {chartName}
      </ChartHeader>
      <ChartMain>
        {children}
      </ChartMain>
    </Chart>
  )
}

export default ChartWrapper;
