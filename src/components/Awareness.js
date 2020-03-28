import React from "react";
import { Flex, Box, Text, Card } from "rebass";
import styled from "styled-components";
import Slider from "infinite-react-carousel";
import wash from "../assets/images/wash.jpg";

const preventiveAwareness = [
  {
    img: wash,
    title: "Wash your hands frequently",
    data:
      "<p> Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>"
  },
  {
    title: "Maintain social distancing",
    data:
      "<p> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease   </p > "
  },
  {
    title: "Avoid touching eyes, nose and mouth",
    data:
      "<p> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</p>"
  },
  {
    title: "Practice respiratory hygiene",
    data:
      "<p> Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately. <br/>Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.</p>"
  },
  {
    title: "Seek medical care early",
    data:
      "<p>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>"
  },
  {
    title: "Stay at home",
    data:
      "<p>Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses. </p>"
  }
];

const Awareness = () => {
  return (
    <Box p={3}>
      <Box mt={4} mb={4}>
        <Text fontSize="1.5rem">Protective Measures</Text>
      </Box>
      <Slider dots>
        {preventiveAwareness.map(awar => (
          <AwarenessCard>
            <AwarnessContainerLeft className="awareness_container">
              <Box className="header" textAlign="center">
                <Text fontSize="1.96rem">{awar.title}</Text>
              </Box>
              <Box className="pict">
                {" "}
                <img
                  className="pict"
                  src={awar.img}
                  alt="wash hands"
                  height="100%"
                  width="100%"
                />
              </Box>

              <Box
                dangerouslySetInnerHTML={{ __html: awar.data }}
                className="main"
                sx={{ fontSize: "1.3rem" }}
              ></Box>
            </AwarnessContainerLeft>
          </AwarenessCard>
        ))}
      </Slider>
    </Box>
  );
};

const AwarenessCard = styled(Box)`
  min-height: 600px;
  -webkit-box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  -moz-box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  box-shadow: ${({ theme }) => theme.statusCardBoxShadow};
  border-radius: 8px;
`;

const AwarnessContainerLeft = styled(Box)`
  .header {
    grid-area: header;
  }
  .pict {
    grid-area: pict;
  }
  .item3 {
    grid-area: main;
  }

  display: grid;
  grid-template-areas:
    "pict header header header header"
    "pict main  main main main";
  grid-gap: 10px;
  padding: 10px;

  @media (max-width: 540px) {
    grid-template-areas:
      "header"
      "pict"
      "main";
  }
`;
export default Awareness;
