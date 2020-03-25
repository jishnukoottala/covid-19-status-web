import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex } from "rebass";
import Countrydata from "./CountryData";
import Loader from "../views/Loader";
import StatusDashCard from "../views/StatusDashCard";
import FormattedDateCard from "../views/FormattedDateCard";

const RankPage = () => {
  const [dailyData, setDailyData] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const globalSummary = await axios.get(
          `https://covid19.mathdro.id/api/`
        );
        const daily = await axios.get(
          `https://covid19.mathdro.id/api/confirmed`
        );

        setGlobalData(globalSummary.status === 200 ? globalSummary.data : null);

        const { data } = daily;
        // console.log("dailyData ", daily);
        const sortedData = data && data.sort((a, b) => b.deaths - a.deaths); // ordering the data by descending  order of death
        setDailyData(sortedData);
      } catch (error) {
        setDailyData(null);
      }
    }
    fetchData();
  }, []);

  return (
    <Flex flexDirection="column">
      {globalData && dailyData && (
        <Box p={4}>
          <Flex
            flex={1}
            justifyContent="space-between"
            flexDirection={["column", "row"]}
            p={4}
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
          <FormattedDateCard updateTime={globalData.lastUpdate} />
        </Box>
      )}

      {dailyData &&
        dailyData.map(countryData => (
          <Countrydata
            key={`${countryData.iso3}-${
              countryData.provinceState ? countryData.provinceState : "-"
            }-${countryData.long}-${countryData.lat}`}
            country={countryData.countryRegion}
            province={countryData.provinceState}
            confirmed={countryData.confirmed}
            recovered={countryData.recovered}
            deaths={countryData.deaths}
            active={countryData.active}
          />
        ))}
      {!dailyData && <Loader />}
    </Flex>
  );
};

export default RankPage;
