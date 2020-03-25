import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Flex } from "rebass";

import Loader from "../views/Loader";
import StatusDashCard from "../views/StatusDashCard";
import FormattedDateCard from "../views/FormattedDateCard";

const WorldStatus = () => {
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const globalSummary = await axios.get(
          `https://covid19.mathdro.id/api/`
        );

        console.log("global summary - ", globalSummary);
        setGlobalData(globalSummary.status === 200 ? globalSummary.data : null);
      } catch (error) {
        setGlobalData(null);
      }
    }

    fetchData();
  }, []);

  return (
    <Box>
      <Flex flexDirection="column">
        {!globalData && <Loader />}
        {globalData && (
          <Box p={4}>
            <Flex
              flex={1}
              justifyContent="space-between"
              flexDirection={["column", "row"]}
            >
              <StatusDashCard
                title={"Confirmed"}
                text={globalData.confirmed.value}
              />
              <StatusDashCard
                title={"Recovered"}
                text={globalData.recovered.value}
              />
              <StatusDashCard title={"Deaths"} text={globalData.deaths.value} />
            </Flex>
            <Box mt={3}>
              <FormattedDateCard
                title="Last Refreshed : "
                updateTime={globalData.lastUpdate}
              />
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default WorldStatus;
