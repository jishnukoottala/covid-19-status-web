import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box } from "rebass";
import styled from "styled-components";

import StatusDashCard from "../views/StatusDashCard";
import StateChart from "../views/StateChart";
import ContactNumberBox from "../views/ContactNumberBox";
import Loader from "../views/Loader";
import FormattedDateCard from "../views/FormattedDateCard";
import StateTableData from "../views/StateTableData";

const HomePage = () => {
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(null);
  const [lastOriginUpdate, setLastOriginUpdate] = useState(null);
  const [regionalContactData, setRegionalContactData] = useState(null);
  const [primaryContactData, setPrimaryContactData] = useState(null);
  const [viewStatewise, setViewStatewise] = useState("chart");

  useEffect(() => {
    async function getData() {
      try {
        let latestReport = await axios.get(
          `https://api.rootnet.in/covid19-in/stats/latest`
        );

        if (latestReport.status === 200) {
          const { data } = latestReport;

          setConfirmed(
            data.data.summary.confirmedCasesIndian +
              data.data.summary.confirmedCasesForeign
          );
          setRecovered(data.data.summary.discharged);
          setDeaths(data.data.summary.deaths);
          setLastUpdatedTime(data.lastRefreshed);
          setLastOriginUpdate(data.lastOriginUpdate);
        }

        //console.log("stateREsults - ", stateReport);

        let contactDetails = await axios.get(
          `https://api.rootnet.in/covid19-in/contacts`
        );

        setPrimaryContactData(
          contactDetails.status === 200
            ? contactDetails.data.data.contacts.primary
            : null
        );
        setRegionalContactData(
          contactDetails.status === 200
            ? contactDetails.data.data.contacts.regional
            : null
        );
        if (latestReport.status === 200) {
          // const sortedData = data && data.sort((a, b) => b.deaths - a.deaths); // ordering the data by descending  order of death
          const regionalData = latestReport.data.data.regional;

          const regionalSortedData = regionalData.sort((a, b) => {
            if (a.loc > b.loc) {
              return -1;
            }
            if (a.loc < b.loc) {
              return 1;
            }
            return 0;
          });

          setStateData(regionalSortedData);
        }
      } catch (error) {}
    }

    getData();
  }, []);

  //console.log("regionalContacts is -- ",);

  return (
    <>
      {!confirmed && <Loader />}
      {confirmed && (
        <HomePageBox mb={4}>
          <Flex
            flex={1}
            justifyContent="space-between"
            flexDirection={["column", "row"]}
            p={4}
          >
            <StatusDashCard title={"Confirmed"} text={confirmed} />
            <StatusDashCard title={"Recovered"} text={recovered} />
            <StatusDashCard title={"Deaths"} text={deaths} />
          </Flex>
          <FormattedDateCard
            title={`Last refreshed : `}
            updateTime={lastUpdatedTime}
          />
          <FormattedDateCard
            title={`Last updated at source : `}
            updateTime={lastOriginUpdate}
          />
          <Box mt={3}>
            {stateData && viewStatewise === "chart" && (
              <StateChart
                stateData={stateData}
                setViewStatewise={setViewStatewise}
              />
            )}
          </Box>
          <Box mt={3}>
            {stateData && viewStatewise === "table" && (
              <StateTableData
                stateData={stateData}
                setViewStatewise={setViewStatewise}
              />
            )}
          </Box>
          {regionalContactData && (
            <ContactNumberBox
              contactDetails={regionalContactData}
              primaryContactData={primaryContactData}
            />
          )}
        </HomePageBox>
      )}
    </>
  );
};

const HomePageBox = styled(Box)`
  color: ${({ theme }) => theme.text};
`;

export default HomePage;
