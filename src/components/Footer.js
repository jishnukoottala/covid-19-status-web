import React from "react";
import { Flex, Box } from "rebass";

const Footer = ({ theme, setTheme }) => {
  return (
    <Flex
      sx={{ width: "100%", padding: "16px", color: "#fff" }}
      flexDirection="column"
      mt={6}
    >
      <Box>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Switch to {theme === "light" ? "dark theme" : "light theme"}
        </button>
      </Box>
      <Box sx={{ color: "#fff" }}>Sources: </Box>
      <FooterBox
        link="https://github.com/mathdroid/covid-19-api"
        text="Mathdroid"
      />
      <FooterBox
        link="https://github.com/amodm/api-covid19-in"
        text="API-covid-19-India"
      />
      <FooterBox link="https://www.who.int/" text="World Health Organization" />
      <FooterBox
        link="https://www.mohfw.gov.in/"
        text="Department of Health and Family Welfare"
      />
    </Flex>
  );
};

const FooterBox = ({ link, text }) => (
  <Box>
    <a href={`${link}`} target="__blank" style={{ color: "#800080" }}>
      {text}
    </a>
  </Box>
);

export default Footer;
