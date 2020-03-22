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
  const fatalityRate = ((deaths / confirmed) * 100).toFixed(2);
  return (
    <Box
      mt="7px"
      py="16px"
      px="12px"
      sx={{ borderBottom: "1px solid #b6721f" }}
    >
      <Flex flexDirection="column">
        <Box>
          <Flex>
            <Box>
              <Flex flexDirection="column">
                <Text fontSize="1.8rem" as="div">
                  {country}
                </Text>{" "}
                {province && <Text as="div">({province})</Text>}
              </Flex>
            </Box>

            <Box p={3}>
              <Text>
                Fatality Rate: &nbsp;
                <span style={{ color: "red" }}>{fatalityRate} %</span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={["space-between", "initial"]} pt={2}>
          <Box px={[2, 4]}>
            <Flex flexDirection={["column", "row"]}>
              <Text as="div" fontSize="1.1rem">
                Confirmed
              </Text>{" "}
              <Text as="div" fontSize="1.1rem" pl={[0, 2]}>
                {confirmed}
              </Text>
            </Flex>
          </Box>
          <Box px={[2, 4]}>
            <Flex flexDirection={["column", "row"]}>
              <Text as="div" fontSize="1.1rem">
                Recovered
              </Text>{" "}
              <Text as="div" fontSize="1.1rem" pl={[0, 2]}>
                {recovered}
              </Text>
            </Flex>
          </Box>
          <Box px={[2, 4]}>
            <Flex flexDirection={["column", "row"]}>
              <Text as="div" fontSize="1.1rem">
                Deaths
              </Text>{" "}
              <Text as="div" fontSize="1.1rem" pl={[0, 2]}>
                {deaths}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CountryData;
