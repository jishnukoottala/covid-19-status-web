import React from "react";
import { Flex, Box, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactNumberBox = ({ contactDetails }) => {
  return (
    <Box mt={6} style={{ color: "#fff" }} p={4}>
      <Box>
        <Flex py={4}>
          <Flex sx={{ alignItems: "center" }} pr={2}>
            <FontAwesomeIcon icon={faPhone} color="#4cff73" size="lg" />
          </Flex>{" "}
          <Text fontSize="1.5rem"> Emergency Contact Numbers</Text>
        </Flex>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["auto", "auto auto auto"]
          }}
        >
          {contactDetails.map((state, index) => (
            <StateContactCard
              p={4}
              key={index}
              state={state.loc}
              number={state.number}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const StateContactCard = ({ state, number }) => (
  <Box p={4} sx={{ borderBottom: "1px solid #2f976c" }}>
    <Flex flexDirection={["column", "row"]}>
      <Box p={2}>
        <Text fontSize="1.3rem">{state}:</Text>
      </Box>

      <Box p={2}>
        <Text fontSize="1.3rem">{number}</Text>
      </Box>
    </Flex>
  </Box>
);
export default ContactNumberBox;
