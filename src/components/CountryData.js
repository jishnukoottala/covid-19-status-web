import React from "react";
import { Flex, Box, Text } from "rebass";

const CountryData = ({
  country,
  province,
  confirmed,
  recovered,
  deaths,
  active
}) => {
  return (
    <Box mt="7px" py="15px" px="12px">
      <Flex flexDirection="column">
        <Box>
          <Text fontSize="1.2rem">{country}</Text>{" "}
          {province && <Text>({province})</Text>}
        </Box>
        <Flex>
          <Box px="4px">Confirmed : {confirmed}</Box>
          <Box px="4px">Recovered : {recovered}</Box>
          <Box px="4px">Deaths: {deaths}</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CountryData;
