import React from "react";
import { format } from "date-fns";
import { Box, Flex, Text } from "rebass";

const FormattedDateCard = ({ title, updateTime }) => {
  const formattedDate = format(new Date(updateTime), "dd/MM/yyyy  HH:mm:s");
  return (
    <Box>
      <Flex justifyContent="center">
        <Box>
          <Text>{title} </Text>
        </Box>
        <Box>
          <Text>{formattedDate}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FormattedDateCard;
