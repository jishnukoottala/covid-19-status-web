import React from "react";
import { Box, Flex, Text, Button } from "rebass";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const StateTableData = ({ stateData, setViewStatewise }) => {
  console.log("state data -->", stateData);
  return (
    <Box p={3}>
      <Flex p={4} pb={0}>
        <Flex sx={{ alignItems: "center" }} pr={2}>
          <FontAwesomeIcon icon={faTable} color="#ff4c4c" size="lg" />
        </Flex>{" "}
        <Text fontSize="1.5rem">State wise Status</Text>
        <ViewButton
          onClick={() => {
            setViewStatewise("chart");
          }}
          sx={{ textDecoration: "underline" }}
        >
          <Text sx={{ opacity: "0.65" }}>Change view</Text>
        </ViewButton>
      </Flex>
      <StateTableContainer mt={4}>
        <Box
          sx={{ borderBottom: "none", textAlign: "left" }}
          className="tableheader"
        >
          <Text fontSize="1.15rem">State</Text>
        </Box>
        <Box className="tableheader">
          <Text fontSize="1.15rem">IND</Text>
        </Box>
        <Box className="tableheader">
          <Text fontSize="1.15rem">FORN</Text>
        </Box>
        <Box className="tableheader">
          <Text fontSize="1.15rem">RCVR</Text>
        </Box>
        <Box className="tableheader">
          <Text fontSize="1.15rem">Deaths</Text>
        </Box>

        {stateData.reverse().map(state => (
          <TableRow state={state} />
        ))}
      </StateTableContainer>
    </Box>
  );
};

const TableRow = ({ state }) => (
  <>
    <Box sx={{ textAlign: "left" }}>{state.loc}</Box>
    <Box>{state.confirmedCasesIndian}</Box>
    <Box>{state.confirmedCasesForeign}</Box>
    <Box>{state.discharged}</Box>
    <Box>{state.deaths}</Box>
  </>
);

const ViewButton = styled(Button)`
  color: ${({ theme }) => theme.text} !important;
  background-color: transparent;
  outline: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const StateTableContainer = styled(Box)`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 2fr;
  font-size: 1.1rem;
  text-align: center;

  div {
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.stateTableBorderBottom};
    border-opacity: 0.5;
  }

  .tableheader {
    border-bottom: none;
  }
`;
export default StateTableData;
