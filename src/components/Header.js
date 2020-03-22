import React from "react";
import { Flex, Box, Text } from "rebass";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHome,
  faThList,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let location = useLocation();

  return (
    <Flex
      flex={1}
      sx={{
        padding: "25px",

        color: "#fff"
      }}
      justifyContent="space-between"
      flexDirection={["column", "row"]}
    >
      <Box>
        <Text
          sx={{
            fontSize: ["1.6rem", "2rem"],
            fontWeight: "Bold",
            fontFamily: "PT Sans"
          }}
        >
          {" "}
          {getTitle(location.pathname)}
        </Text>
      </Box>
      <Flex alignSelf="flex-end" mt={[2, 0]}>
        <Box px="8px">
          <Link to="/" as="div">
            <FontAwesomeIcon icon={faHome} size="lg" color="#6a24c0" />
          </Link>
        </Box>
        <Box px="8px">
          <Link to="/world" as="div">
            <FontAwesomeIcon icon={faThList} size="lg" color="#6a24c0" />
          </Link>
        </Box>

        <Box px="8px">
          <Link to="/country" as="div">
            <FontAwesomeIcon icon={faGlobe} size="lg" color="#6a24c0" />
          </Link>
        </Box>
        <Box px="8px">
          <Link to="/faq" as="div">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="lg"
              color="#6a24c0"
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

const getTitle = location => {
  switch (location) {
    case "/":
      return "Covid 19 Status - India";

    case "/country":
      return "Covid 19 Status - Countries";
    case "/world":
      return "Covid 19 Status - World";
    case "/faq":
      return "Covid 19 - FAQ";

    default:
      return "Covid 19 Status";
  }
};

export default Header;
