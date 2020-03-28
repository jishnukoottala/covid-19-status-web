import React from "react";
import { Box, Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUserCheck,
  faSkullCrossbones,
  faVials,
  faCheck,
  faCheckCircle,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const getIcon = title => {
  switch (title) {
    case "Confirmed":
      return faUserCheck;
    case "Recovered":
      return faShieldAlt;
    case "Total Samples Tested":
      return faVials;
    case "Deaths":
      return faSkullCrossbones;
    case "Tested Individuals":
      return faUserCheck;
    case "Positive Cases":
      return faUserPlus;
    default:
      return faCheckCircle;
  }
};

const getColor = title => {
  switch (title) {
    case "Confirmed":
      return "#e9ae40";
    case "Recovered":
      return "green";
    case "Total Samples Tested":
      return "green";
    case "Deaths":
      return "red";
    case "Tested Individuals":
      return "purple";
    case "Positive Cases":
      return "red";
    default:
      return faCheckCircle;
  }
};

const StatusDashCard = ({ type, title, text }) => {
  return (
    <StatusCardBox
      sx={{
        padding: [3, 5],
        border: "1px solid #1b8abe",

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
              icon={getIcon(title)}
              color={getColor(title)}
              size="2x"
            />
          </Box>{" "}
          <Box px="2px" textAlign="center">
            <Text fontSize="2rem">{title}</Text>
          </Box>
        </Flex>
        <Box sx={{ textAlign: "center" }}>
          <Text fontSize="1.5rem">{text}</Text>
        </Box>
      </Flex>
    </StatusCardBox>
  );
};

const StatusCardBox = styled(Box)`
  -webkit-box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  -moz-box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  border-radius: 8px;
`;

export default StatusDashCard;
