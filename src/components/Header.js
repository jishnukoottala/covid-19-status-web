import React from "react";
import { Flex, Box } from "rebass";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Flex
      flex={1}
      sx={{
        padding: "25px",
        fontSize: "2rem",
        fontWeight: "Bold",
        color: "#fff"
      }}
      justifyContent="space-between"
    >
      <Box>Covid 19 Status</Box>
      <Flex alignSelf="flex-end">
        <Box px="8px">
          <Link to="/" as="div">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </Box>
        <Box px="8px">
          <Link to="/rank" as="div">
            <FontAwesomeIcon icon={faThList} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
