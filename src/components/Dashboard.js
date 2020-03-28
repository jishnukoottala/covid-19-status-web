import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box, Text } from "rebass";
import { Label, Select } from "@rebass/forms";
import Loader from "../views/Loader";
import StatusDashCard from "../views/StatusDashCard";
import FormattedDateCard from "../views/FormattedDateCard";

import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";

const Dashboard = () => {
  const [countryData, setCountryData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState("IN");
  const [countryError, setCountryError] = useState(false);
  const [globalSummary, setGlobalSummary] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://covid19.mathdro.id/api/countries`
      );

      const resp = await axios.get(`https://covid19.mathdro.id/api/`);
      const { data } = result;

      const countriesFiltered = data.countries.filter(item =>
        item.hasOwnProperty("iso3")
      );
      setCountries(countriesFiltered);
      setCountry("IND");
      setGlobalSummary(resp.data);
      const today = new Date();
      const formattedDate = `${today.getMonth() + 1}-${today.getDate() -
        1}-${today.getFullYear()}`;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://covid19.mathdro.id/api/countries/${country}`
        );
        const { data } = result;
        setCountryData(data);
      } catch (error) {
        setCountryError(true);
        setCountryData(null);
      }
    }
    fetchData();
  }, [country]);

  const data01 = [
    {
      id: "deaths",
      label: "Deaths",
      value: countryData && countryData.deaths.value,
      color: "red"
    },

    {
      id: "Confirmed",
      label: "Confirmed",
      value: countryData && countryData.confirmed.value,

      color: "hsl(314, 70%, 50%)"
    },
    {
      id: "recovered",
      label: "recovered",
      value: countryData && countryData.recovered.value,
      color: "hsl(304, 70%, 50%)"
    }
  ];

  return (
    <>
      {!countries && <Loader />}
      {countries && (
        <Box>
          {" "}
          <Flex
            flex={1}
            sx={{
              width: "100%",
              padding: "16px"
            }}
            flexDirection="column"
          >
            <Box width="100%">
              <Flex flexDirection="column">
                <Box sx={{ fontSize: "1.5rem" }} p={4}>
                  <Label htmlFor="country">Country</Label>
                  <CountrySelectBox
                    id="country"
                    name="country"
                    defaultValue="IND"
                    value={country}
                    onChange={e => {
                      setCountry(e.target.value);
                    }}
                  >
                    {countries.map(({ name, iso3 }) => (
                      <option key={`${name}+${iso3}`} value={iso3}>
                        {name}
                      </option>
                    ))}
                  </CountrySelectBox>
                </Box>

                {!countryData && (
                  <Box
                    sx={{
                      width: "100%",
                      padding: 4,
                      fontSize: "1.5rem"
                    }}
                  >
                    No Data for this country
                  </Box>
                )}
                {countryData && (
                  <>
                    <Flex
                      flex={1}
                      justifyContent="space-between"
                      flexDirection={["column", "row"]}
                      p={4}
                    >
                      <StatusDashCard
                        title={"Confirmed"}
                        text={countryData.confirmed.value}
                      />
                      <StatusDashCard
                        title={"Recovered"}
                        text={countryData.recovered.value}
                      />
                      <StatusDashCard
                        title={"Deaths"}
                        text={countryData.deaths.value}
                      />
                    </Flex>
                    <FormattedDateCard
                      title="Last refreshed : "
                      updateTime={countryData.lastUpdate}
                    />
                  </>
                )}
              </Flex>
            </Box>

            <Box sx={{ padding: "16px" }} width="100%" mt={3}>
              {globalSummary && (
                <Box width="100%" height={350}>
                  <Flex justifyContent="center" alignItems="center">
                    <Box>
                      <Text sx={{ fontSize: "1.8rem" }}>Country Status</Text>
                    </Box>
                  </Flex>
                  <ResponsivePie
                    data={data01}
                    margin={{ top: 50, bottom: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={["#d20a0a", "#bc5718", "#28c70f"]}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]]
                    }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: "color" }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    defs={[
                      {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true
                      },
                      {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                      }
                    ]}
                    fill={[
                      {
                        match: {
                          id: "ruby"
                        },
                        id: "dots"
                      },
                      {
                        match: {
                          id: "c"
                        },
                        id: "dots"
                      },
                      {
                        match: {
                          id: "go"
                        },
                        id: "dots"
                      },
                      {
                        match: {
                          id: "python"
                        },
                        id: "dots"
                      },
                      {
                        match: {
                          id: "scala"
                        },
                        id: "lines"
                      },
                      {
                        match: {
                          id: "lisp"
                        },
                        id: "lines"
                      },
                      {
                        match: {
                          id: "elixir"
                        },
                        id: "lines"
                      },
                      {
                        match: {
                          id: "javascript"
                        },
                        id: "lines"
                      }
                    ]}
                    legends={[
                      {
                        anchor: "bottom",
                        direction: "row",
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        symbolSize: 18,
                        symbolShape: "circle",
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemTextColor: "#000"
                            }
                          }
                        ]
                      }
                    ]}
                  />
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

const CountrySelectBox = styled(Select)`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body} !important;
`;

export default Dashboard;
