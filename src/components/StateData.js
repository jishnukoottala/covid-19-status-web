import React from "react";
import { Flex, Box } from "rebass";
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
  return (
    <Box py="10px">
      <BarChart
        width={700}
        height={400}
        data={stateData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="loc" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmedCasesIndian" fill="#8884d8" />
        <Bar dataKey="confirmedCasesForeign" fill="#82ca9d" />
        <Bar dataKey="discharged" fill="green" />
        <Bar dataKey="deaths" fill="red" />
      </BarChart>
    </Box>
  );
};

export default StateDataComponent;
