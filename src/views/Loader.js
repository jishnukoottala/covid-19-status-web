import React from "react";
import loader from "../assets/loader.gif";
import { Box } from "rebass";

const Loader = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
      width: "100%"
    }}
  >
    <Box>
      <img src={loader} alt="loader" />
    </Box>
  </Box>
);

export default Loader;
