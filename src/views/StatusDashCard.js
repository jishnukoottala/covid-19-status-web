import React from "react";
import { Box, Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUserCheck,
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";

const StatusDashCard = ({ type, title, text }) => {
  return (
    <Box
      sx={{
        padding: [3, 5],
        border: "1px solid #1b8abe",
        boxShadow: "3px 3px #5b4e4e",
        minWidth: ["100%", "320px"],
        maxWidth: ["100%", "320px"]
      }}
      mt={[2, 0]}
    >
      <Flex flexDirection="column">
        <Flex
          justifyContent="space-between"
          py="6px"
          flexDirection={["column", "row"]}
        >
          <Box px="6px" textAlign="center">
            <FontAwesomeIcon
              icon={
                title === "Confirmed"
                  ? faUserCheck
                  : title === "Recovered"
                  ? faShieldAlt
                  : faSkullCrossbones
              }
              color={
                title === "Confirmed"
                  ? "#acbc26"
                  : title === "Recovered"
                  ? "green"
                  : "red"
              }
              size="2x"
            />
          </Box>{" "}
          <Box px="6px" textAlign="center">
            <Text fontSize="2rem">{title}</Text>
          </Box>
        </Flex>
        <Box sx={{ textAlign: "center" }}>
          <Text fontSize="1.5rem">{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default StatusDashCard;
