import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box } from "rebass";

import StatusDashCard from "../views/StatusDashCard";
import StateChart from "../views/StateChart";
import ContactNumberBox from "../views/ContactNumberBox";
import Loader from "../views/Loader";
import FormattedDateCard from "../views/FormattedDateCard";

const HomePage = () => {
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(null);

  const [regionalContactData, setRegionalContactData] = useState(null);
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
        }

        //console.log("stateREsults - ", stateReport);

        let contactDetails = await axios.get(
          `https://api.rootnet.in/covid19-in/contacts`
        );

        //console.log("contactDetails -", contactDetails);

        setRegionalContactData(
          contactDetails.status === 200
            ? contactDetails.data.data.contacts.regional
            : null
        );
        if (latestReport.status === 200) {
          setStateData(latestReport.data.data.regional);
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
        <Box sx={{ color: "#fff" }} mb={4} p={4}>
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
          <FormattedDateCard updateTime={lastUpdatedTime} />
          <Box mt={3}>{stateData && <StateChart stateData={stateData} />}</Box>
          {regionalContactData && (
            <ContactNumberBox contactDetails={regionalContactData} />
          )}
        </Box>
      )}
    </>
  );
};

export default HomePage;