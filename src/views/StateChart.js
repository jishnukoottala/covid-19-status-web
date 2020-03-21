import React from "react";
import { Box, Text } from "rebass";
import { ResponsiveBar } from "@nivo/bar";

const StateChart = ({ stateData }) => {
  console.log("statedata", stateData);
  const stateDataToRender = stateData.map(item => ({
    ...item,
    confirmedCasesIndianColor: "green",
    confirmedCasesForeignColor: "yellow",
    dischargedColor: "purple",
    deathsColor: "coral"
  }));

  return (
    <Box height={500} sx={{ minHeight: 500 }}>
      <Box>
        <Text fontSize="1.5rem">State wise Status</Text>
      </Box>
      <ResponsiveBar
        data={stateDataToRender}
        keys={[
          "confirmedCasesIndian",
          "confirmedCasesForeign",
          "discharged",
          "death"
        ]}
        indexBy="loc"
        margin={{ top: 50, bottom: 50 }}
        padding={0.3}
        layout="horizontal"
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "total cases",
          color: "red",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "cases",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Box>
  );
};

export default StateChart;
