import React from "react";
import { Flex, Box, Text } from "rebass";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Flex
      flex={1}
      sx={{
        padding: "25px",

        color: "#fff"
      }}
      justifyContent="space-between"
    >
      <Box>
        <Text
          sx={{ fontSize: "2rem", fontWeight: "Bold", fontFamily: "PT Sans" }}
        >
          Covid 19 Status - India
        </Text>
      </Box>
      <Flex alignSelf="flex-end">
        <Box px="8px">
          <Link to="/" as="div">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </Box>
        <Box px="8px">
          <Link to="/rank" as="div">
            <FontAwesomeIcon icon={faThList} size="lg" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
