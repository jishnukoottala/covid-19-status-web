import React from "react";
import { Box, Flex, Text } from "rebass";
import { ResponsiveBar } from "@nivo/bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

const StateChart = ({ stateData }) => {
  const stateDataToRender = stateData.map(item => ({
    ...item,
    confirmedCasesIndianColor: "green",
    confirmedCasesForeignColor: "yellow",
    Indian: item.confirmedCasesIndian,
    Foreign: item.confirmedCasesForeign,
    Discharged: item.discharged,
    Deaths: item.deaths
  }));

  return (
    <Box height={600} sx={{ minHeight: 500, backgroundColor: "inherit" }}>
      <Flex p={4}>
        <Flex sx={{ alignItems: "center" }} pr={2}>
          <FontAwesomeIcon icon={faChartBar} color="#ff4c4c" size="lg" />
        </Flex>{" "}
        <Text fontSize="1.5rem">State wise Status</Text>
      </Flex>
      <ResponsiveBar
        data={stateDataToRender}
        keys={["Indian", "Foreign", "Discharged", "Deaths"]}
        indexBy="loc"
        margin={{ top: 20, right: 30, bottom: 70, left: 90 }}
        padding={0.3}
        layout="horizontal"
        colors={["#c67c37", "#c0ca47", "#28c70f", "#d20a0a"]}
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
        borderColor={{ from: "color", modifiers: [["brighter", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
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
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: -18,
            translateY: 68,
            itemsSpacing: 4,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 16,
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
