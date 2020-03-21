import React from "react";
import { Flex, Box } from "rebass";

const Footer = () => {
  return (
    <Flex sx={{ width: "100%", padding: "16px", color: "#fff" }}>
      <Box sx={{ color: "#fff" }}>Source: </Box>
      <a href="https://github.com/mathdroid/covid-19-api" target="__blank">
        Mathdroid
      </a>
    </Flex>
  );
};

export default Footer;
