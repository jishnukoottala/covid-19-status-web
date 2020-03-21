import React from "react";
import { Flex, Box } from "rebass";

const Footer = () => {
  return (
    <Flex
      sx={{ width: "100%", padding: "16px", color: "#fff" }}
      flexDirection="column"
      mt="16px"
    >
      <Box sx={{ color: "#fff" }}>Sources: </Box>
      <Box sx={{ color: "#fff" }}>
        <a href="https://github.com/mathdroid/covid-19-api" target="__blank">
          Mathdroid
        </a>
      </Box>
      <Box sx={{ color: "#fff" }}>
        <a href="https://github.com/amodm/api-covid19-in" target="__blank">
          API-covid-19-India
        </a>
      </Box>
    </Flex>
  );
};

export default Footer;
