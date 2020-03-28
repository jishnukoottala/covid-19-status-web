import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Text } from "rebass";
import Loader from "../views/Loader";
import StatusDashCard from "../views/StatusDashCard";
import FormattedDateCard from "../views/FormattedDateCard";

const TestingDataPage = () => {
  const [testSummaryData, setTestSummaryData] = useState(null);
  const [lastRefreshedDate, setLastRefreshedDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const testSummary = await axios.get(
          `https://api.rootnet.in/covid19-in/stats/testing/latest`
        );

        setTestSummaryData(
          testSummary.status === 200 ? testSummary.data : null
        );

        const { data } = testSummary;

        setLastRefreshedDate(data.lastRefreshed);
        setTestSummaryData(data.data);
      } catch (error) {
        setTestSummaryData(null);
      }
    }

    fetchData();
  }, []);

  return (
    <Box p={[1, 4]}>
      {!testSummaryData && <Loader />}
      {testSummaryData && (
        <Box p={4}>
          <Flex
            flex={1}
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <StatusDashCard
              title={"Total Samples Tested"}
              text={testSummaryData.totalSamplesTested}
            />
            <StatusDashCard
              title={"Tested Individuals"}
              text={testSummaryData.totalIndividualsTested}
            />
            <StatusDashCard
              title={"Positive Cases"}
              text={testSummaryData.totalPositiveCases}
            />
          </Flex>
          <Box mt={3}>
            <FormattedDateCard
              title="Last Refreshed : "
              updateTime={lastRefreshedDate}
            />
          </Box>
          <Flex flexDirection="column" p={4}>
            <Box p={[1, 4]}>
              <Text fontSize="1.6rem">When to get tested for COVID 19?</Text>{" "}
            </Box>
            <Box p={1}>
              <Text fontSize="1.1rem">
                All individuals need not be tested, because Disease is primarily
                reported in Individuals with travel history to the affected
                countries or close contacts of positive cases
              </Text>
            </Box>

            <Box p={[1, 4]}>
              <Text fontSize="1.6rem">Whom to Test?</Text>{" "}
            </Box>
            <Box p={1}>
              <Text fontSize="1.1rem">ALL symptomatic people who </Text>
              <ul fontSize="1.1rem">
                <li>Have history of international travel in last 14 days</li>
                <li>Had come in contact of confirmed cases</li>
                <li>Are healthcare workers</li>
                <li>
                  Are hospitalized patients with Severe Acute Respiratory
                  Illness (SARI) or Influenza Like Illness (ILI) or severe
                  pneumonia.
                </li>
              </ul>
              <Text fontSize="1.1rem">
                Asymptomatic direct and high-risk contacts of confirmed cases
                should be tested once between day 5 and day 14 of coming in
                his/her contact. Direct and high-risk contact include:
              </Text>
              <ul fontSize="1.1rem">
                <li>Those living in same household with a confirmed case</li>
                <li>
                  Healthcare workers who examined a confirmed case without
                  adequate protection as per WHO recommendations
                </li>
              </ul>
            </Box>
            <Box p={[1, 4]}>
              <Box p={3}>
                <a
                  href="https://icmr.nic.in/sites/default/files/upload_documents/Govt_COVID19_Testing_Lab_28032020.pdf"
                  target="__blank"
                  style={{ fontSize: "1.2rem", color: "blue" }}
                >
                  Government Laboratories Approved by ICMR
                </a>
              </Box>
              <Box p={3}>
                <a
                  href="https://icmr.nic.in/sites/default/files/upload_documents/Private_Labs_28032020.pdf"
                  target="__blank"
                  style={{ fontSize: "1.2rem", color: "blue" }}
                >
                  List of Private Laboratories to test COVID-19
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default TestingDataPage;
