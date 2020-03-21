import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box } from "rebass";
import Countrydata from "./CountryData";

const RankPage = () => {
  const [dailyData, setDailyData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const daily = await axios.get(
          `https://covid19.mathdro.id/api/confirmed`
        );

        const { data } = daily;

        //   const reduced = daily.reduce((acc,(item)=> []))
        console.log("DAILY", data);
        setDailyData(data);
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
            }`}
            country={countryData.countryRegion}
            province={countryData.provinceState}
            confirmed={countryData.confirmed}
            recovered={countryData.recovered}
            deaths={countryData.deaths}
            active={countryData.active}
          />
        ))}
      something
    </Flex>
  );
};

export default RankPage;
