import React from "react";
import { Flex, Box, Text } from "rebass";

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
    </Box>
  );
};

export default StateDataComponent;
