import React from "react";
import { Flex, Box, Text } from "rebass";

const faqs = [
  {
    question: "What is 2019 Novel Coronavirus ?",
    answer:
      "2019 Novel Coronavirus. or 2019-nCoV, is a new virus first identified in Wuhan. Hubei Province. China. It is named novel as it has not been previously identified"
  },
  {
    question: "What is the source of 2019 Novel Coronavirus ?",
    answer:
      "At present exact source of infection of 2019 novel Corona virus has not been identified. Coronaviruses are a large family of viruses, some causing illness in people and others that circulate among animals. Initially, many of the patients in the outbreak in Wuhan, China reportedly had some link to large seafood and animal market. suggesting the virus likely emerged from an animal source."
  },
  {
    question: "What are the initial symptoms of Novel Coronavirus",
    answer:
      "Current symptoms reported for patients with 2019—nCoV include acute onset of fever. cough, and difficulty in breathing."
  },
  {
    question: "How does the virus spread ?",
    answer:
      "The specific modes of transmission of the virus is not clear yet since it is a novel virus. This virus probably originally emerged from an animal source but now seems to be spreading from person-to—person. It’s not clear yet how easily 2019-nCoV spreads from person-to‘person. It is thought to have happened mainly when an infected person coughs or sneezes, similar to how influenza and other respiratory pathogens spread."
  },

  {
    question:
      "Is there a vaccine to get protection from 2019 novel Corona Virus ?",
    answer:
      "Currently, there is no vaccine available to protect against 2019— novel Corona Virus."
  },
  {
    question: "What are the treatments ?",
    answer:
      "There is no Specific antiviral treatment available for 2019— novel Corona Virus infection. People infected with 2019- novel Corona Virus should receive supportive care to help relieve symptoms."
  },
  {
    question: "Who is at risk of developing severe illness?",
    answer:
      "While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others."
  },
  {
    question: "Should I wear a mask to protect myself?",
    answer:
      "Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely."
  }
];

const FAQPage = () => {
  return (
    <Box mt={4} p={4} mb={4}>
      {faqs.map((item, index) => (
        <Card question={item.question} answer={item.answer} />
      ))}
    </Box>
  );
};

const Card = ({ question, answer }) => (
  <Box p={3} mb={3}>
    <Flex flexDirection="column">
      <Box>
        <Text fontSize="2rem" color="#7979fa">
          {question}
        </Text>
      </Box>
      <Box mt={2}>
        <Text fontSize="1.5rem">{answer}</Text>
      </Box>
    </Flex>
  </Box>
);

export default FAQPage;
