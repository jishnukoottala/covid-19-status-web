import React from "react";
import { Flex, Box, Text, Button } from "rebass";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <Box mt={[3, 6]}>
      <Flex sx={{ width: "100%", padding: 3 }}>
        {/* <FooterBox
          link="https://github.com/mathdroid/covid-19-api"
          text="Mathdroid"
        />
        <FooterBox
          link="https://github.com/amodm/api-covid19-in"
          text="API-covid-19-India"
        />
        <FooterBox
          link="https://www.who.int/"
          text="World Health Organization"
        />
        <FooterBox
          link="https://www.mohfw.gov.in/"
          text="Department of Health and Family Welfare"
        /> */}
      </Flex>
      <Flex
        p={3}
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <Flex>
          <Box px={2}>
            <Link to="/" as="div">
              Home
            </Link>
          </Box>
          <Box px={2}>
            <Link to="/sources" as="div">
              Sources
            </Link>
          </Box>
          <Box px={2}>
            <Link to="/faq" as="div">
              FAQ
            </Link>
          </Box>
        </Flex>

        <Box mt={[3, 0]}>
          <ThemeButton
            onClick={() => {
              toggleTheme();
            }}
            sx={{ textDecoration: "underline" }}
          >
            <Text sx={{ opacity: "0.65" }}>
              Switch to {theme === "light" ? "dark theme" : "light theme"}
            </Text>
          </ThemeButton>
        </Box>
      </Flex>
      <Flex>
        <Box p={3}>
          <Text sx={{ opacity: "0.5" }}>
            Disclaimer: This site does not host any information other than
            sourced from the websites mentioned. We will not be responsible for
            any erroneous or delayed updation of information on the websites
            from which information is sourced
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const FooterBox = ({ link, text }) => (
  <Box>
    <a href={`${link}`} target="__blank" style={{ color: "#800080" }}>
      {text}
    </a>
  </Box>
);

const ThemeButton = styled(Button)`
  color: ${({ theme }) => theme.text} !important;
  background-color: transparent;
  outline: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

export default Footer;
