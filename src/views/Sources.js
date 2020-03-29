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

const awarenesSources = [
  {
    text: "World Health Organization",
    link:
      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
  }
];

const awarenessPictures = [
  {
    text: "Wash hands - created by shayne_ch13",
    link: "https://www.freepik.com/free-photos-vectors/water"
  },
  {
    text: "Social distancing - created by freepik",
    link: "https://www.freepik.com/free-photos-vectors/people"
  },
  {
    text: "Avoid touching - pic from fox news",
    link:
      "https://www.foxnews.com/health/coronavirus-prevention-tips-how-to-stop-touching-your-face"
  },
  {
    text:
      "Practice respiratory hygeine - photo created by freepik - www.freepik.com",
    link: "https://www.freepik.com/free-photos-vectors/woman"
  },
  {
    text: "Seek medical care - Card photo created by ijeab - www.freepik.com",
    link: "https://www.freepik.com/free-photos-vectors/card"
  },
  {
    text: "Stay home - Business photo created by phduet - www.freepik.com",
    link: "https://www.freepik.com/free-photos-vectors/business"
  }
];

const testingPagesResources = [
  {
    text: "List of approved labs - Indian Council of Medical Research",
    link: "https://icmr.nic.in/"
  },
  {
    text: "Whom to test data",
    link: "https://www.mohfw.gov.in/"
  }
];
const Sources = () => {
  return (
    <Box mt={4} p={4} mb={4}>
      <SourcesCard title="Sources" sources={sources} />
      <SourcesCard title="API Sources" sources={apisources} />
      <SourcesCard title="Awarenes Page" sources={awarenesSources} />
      <SourcesCard
        title="Protective Measures Pictures"
        sources={awarenessPictures}
      />
      <SourcesCard
        title="Testing - resources"
        sources={testingPagesResources}
      />
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
    <a
      href={`${link}`}
      target="__blank"
      style={{ color: "#800080", fontSize: "1.2rem" }}
    >
      {text}
    </a>
  </Box>
);

export default Sources;
