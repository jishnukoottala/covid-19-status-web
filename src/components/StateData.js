import React from "react";
import { Flex, Box, Text } from "rebass";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const StateDataComponent = ({ stateData }) => {
  console.log("stateData ", stateData);
  const stateTotal = stateData.map(item => ({
    ...item,
    confirmedCases: item.confirmedCasesIndian + item.confirmedCasesForeign
  }));

  const COLORS = ["#b69b2e", "#c22121", "#21c291"];
  return (
    <Box py="10px" sx={{ color: "#fff" }} mt={["30px", 0]}>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Box>
          <Text fontSize="1.2rem">Statewise Status</Text>
        </Box>
      </Flex>

      <BarChart
        width={400}
        height={400}
        data={stateTotal}
        margin={{ top: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="loc" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmedCases" fill="#8884d8" label="Confirmed Cases" />
      </BarChart>
    </Box>
  );
};

export default StateDataComponent;
