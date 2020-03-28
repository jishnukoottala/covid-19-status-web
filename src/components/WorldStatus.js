import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Text } from "rebass";
import { Label, Select } from "@rebass/forms";
import styled from "styled-components";

import Loader from "../views/Loader";
import StatusDashCard from "../views/StatusDashCard";
import FormattedDateCard from "../views/FormattedDateCard";
import Countrydata from "./CountryData";

const WorldStatus = () => {
  const [globalData, setGlobalData] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [sortBy, setSortBy] = useState("confirmed");

  const sortitems = [
    {
      id: "confirmed",
      name: "Confirmed cases"
    },
    {
      id: "deaths",
      name: "No of deaths"
    },
    {
      id: "fatality",
      name: "Fatality rate"
    },
    {
      id: "recovery",
      name: "Recovery rate"
    }
  ];

  const fatalityRate = (deaths, confirmed) =>
    ((deaths / confirmed) * 100).toFixed(2);

  const recoveryRate = (recovered, confirmed) =>
    ((recovered / confirmed) * 100).toFixed(2);

  useEffect(() => {
    async function fetchData() {
      try {
        const globalSummary = await axios.get(
          `https://covid19.mathdro.id/api/`
        );

        const countriesSummary = await axios.get(
          `https://covid19.mathdro.id/api/confirmed?byCountry=true`
        );

        setGlobalData(globalSummary.status === 200 ? globalSummary.data : null);

        const { data } = countriesSummary;

        //const sortedData = data && data.sort((a, b) => b.deaths - a.deaths); // ordering the data by descending  order of death

        setCountriesList(data);
      } catch (error) {
        setGlobalData(null);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (sortBy === "fatality") {
      setCountriesList(
        countriesList &&
          countriesList
            .slice()
            .sort(
              (a, b) =>
                fatalityRate(b.deaths, b.confirmed) -
                fatalityRate(a.deaths, a.deaths)
            )
      );
    }
    if (sortBy === "recovery") {
      setCountriesList(
        countriesList &&
          countriesList
            .slice()
            .sort(
              (a, b) =>
                recoveryRate(a.recovered, a.confirmed) -
                recoveryRate(b.recovered, b.deaths)
            )
      );
    }
    if (sortBy === "confirmed") {
      setCountriesList(
        countriesList &&
          countriesList.slice().sort((a, b) => a.confirmed - b.confirmed)
      );
    }
    if (sortBy === "deaths") {
      setCountriesList(
        countriesList &&
          countriesList.slice().sort((a, b) => b.deaths - a.deaths)
      );
    }
  }, [sortBy]);

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
      <Flex
        mt={4}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontSize="1.5rem">Countries list</Text>
        </Box>
        <Box sx={{ fontSize: "1.2rem" }} p={3} width={350}>
          <Label htmlFor="sortBy">Sort List by</Label>

          <SortSelectBox
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={e => {
              setSortBy(e.target.value);
            }}
          >
            {sortitems.map(({ id, name }) => (
              <option key={`${id}`} value={id}>
                {name}
              </option>
            ))}
          </SortSelectBox>
        </Box>
      </Flex>
      <Box mt={2}>
        {countriesList &&
          countriesList.map(countryData => (
            <Countrydata
              key={`${countryData.countryRegion}-${
                countryData.lat ? countryData.lat : "-"
              }-${countryData.long}`}
              country={countryData.countryRegion}
              province={countryData.provinceState}
              confirmed={countryData.confirmed}
              recovered={countryData.recovered}
              deaths={countryData.deaths}
              active={countryData.active}
            />
          ))}
        {!countriesList && <Loader />}
      </Box>
    </Box>
  );
};

const SortSelectBox = styled(Select)`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body}!important;
`;

export default WorldStatus;
