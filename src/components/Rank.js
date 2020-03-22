import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box } from "rebass";
import Countrydata from "./CountryData";
import Loader from "../views/Loader";

const RankPage = () => {
  const [dailyData, setDailyData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const daily = await axios.get(
          `https://covid19.mathdro.id/api/confirmed`
        );

        const { data } = daily;
        const sortedData = data && data.sort((a, b) => b.deaths - a.deaths); // ordering the data by descending  order of death
        setDailyData(sortedData);
      } catch (error) {
        setDailyData(null);
      }
    }
    fetchData();
  }, []);
  return (
    <Flex flexDirection="column" sx={{ color: "#fff" }}>
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
