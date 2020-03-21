import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box, Text } from "rebass";
import CanvasJSReact from "../charts/canvasjs.react";
import { Label, Select } from "@rebass/forms";
import { format } from "date-fns";
import StatusDashCard from "../views/StatusDashCard";
import StateChart from "../views/StateChart";

const HomePage = () => {
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [stateData, setStateData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const results = await axios.get(
          `https://covid19.mathdro.id/api/countries/IND`
        );

        if (results.status === 200) {
          const { data } = results;

          setConfirmed(data.confirmed.value);
          setRecovered(data.recovered.value);
          setDeaths(data.deaths.value);
        }

        let stateReport = await axios.get(
          `https://api.rootnet.in/covid19-in/stats/latest`
        );
        //console.log("stateREsults - ", stateReport);

        if (stateReport.status === 200) {
          console.log("here ");
          setStateData(stateReport.data.data.regional);
        }
      } catch (error) {}
    }

    getData();
  }, []);

  //console.log("stateData is -- ", stateData);

  return (
    <Box sx={{ color: "#fff" }} p={4}>
      <Flex
        flex={1}
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <StatusDashCard title={"Confirmed"} text={confirmed} />
        <StatusDashCard title={"Recovered"} text={recovered} />
        <StatusDashCard title={"Deaths"} text={deaths} />
      </Flex>
      <Box mt={3}>{stateData && <StateChart stateData={stateData} />}</Box>
    </Box>
  );
};

export default HomePage;
