import React from "react";
import { Box, Text } from "rebass";
import { ResponsiveBar } from "@nivo/bar";

const StateChart = ({ stateData }) => {
  console.log("statedata", stateData);
  const stateDataToRender = stateData.map(item => ({
    ...item,
    confirmedCasesIndianColor: "green",
    confirmedCasesForeignColor: "yellow",
    Indian: item.confirmedCasesIndian,
    Foreign: item.confirmedCasesForeign
  }));

  return (
    <Box height={600} sx={{ minHeight: 500, backgroundColor: "inherit" }}>
      <Box p={4}>
        <Text fontSize="1.5rem">State wise Status</Text>
      </Box>
      <ResponsiveBar
        data={stateDataToRender}
        keys={["Indian", "Foreign", "discharged", "deaths"]}
        indexBy="loc"
        margin={{ top: 20, right: 130, bottom: 50, left: 90 }}
        padding={0.3}
        layout="horizontal"
        colors={{ scheme: "red_yellow_blue" }}
        tooltip={function(stateInfo) {
          return (
            <span style={{ color: "#000" }}>
              {`${stateInfo.id}:${stateInfo.value}, Total(active): ${stateInfo
                .data.confirmedCasesIndian +
                stateInfo.data.confirmedCasesForeign +
                stateInfo.data.deaths}`}{" "}
            </span>
          );
        }}
        label={d => `${d.value}`}
        defs={[
          {
            id: "dots",
            type: "color",
            background: "red",
            color: "blue",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",

            background: "yellow",
            color: "blue",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "Indian"
            },
            id: "dots"
          },
          {
            match: {
              id: "Foreign"
            },
            id: "lines"
          }
        ]}
        borderColor={{ from: "color", modifiers: [["brighter", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Cases",
          legendColor: "red",
          color: "red",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
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
