import React from "react";
import { Box, Flex, Text } from "rebass";

const sources = [
  {
    text: "Ministry of Health and Welfare - Govt of India ",
    link: "https://www.mohfw.gov.in/"
  },
  {
    text: "World Health Organization",
    link: "https://www.who.int/"
  }
];

const apisources = [
  {
    text: "API Used in HomePage",
    link: "https://github.com/amodm/api-covid19-in"
  },
  {
    text: "API used for global data",
    link: "https://github.com/mathdroid/covid-19-api"
  }
];

const Sources = () => {
  return (
    <Box mt={4} p={4} mb={4}>
      <SourcesCard title="Sources" sources={sources} />
      <SourcesCard title="API Sources" sources={apisources} />
    </Box>
  );
};

const SourcesCard = ({ title, sources }) => (
  <Box mt={3}>
    <Box>
      <Text fontSize="1.5rem">{title}</Text>
    </Box>
    <Flex flexDirection="column">
      {sources.map((item, index) => (
        <FooterBox link={item.link} text={item.text} />
      ))}
    </Flex>
  </Box>
);

// const Card = ({ question, answer }) => (
//   <Box p={3} mb={3}>
//     <Flex flexDirection="column">
//       <Box>
//         <Text fontSize="1.2rem" color="#7979fa">
//           {question}
//         </Text>
//       </Box>
//       <Box mt={2}>
//         <Text fontSize="1.1rem">{answer}</Text>
//       </Box>
//     </Flex>
//   </Box>
// );

const FooterBox = ({ link, text }) => (
  <Box p={3}>
    <a href={`${link}`} target="__blank" style={{ color: "#800080" }}>
      {text}
    </a>
  </Box>
);

export default Sources;
