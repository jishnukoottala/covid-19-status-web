import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box, Text } from "rebass";
import CanvasJSReact from "../charts/canvasjs.react";
import { Label, Select } from "@rebass/forms";
import { format } from "date-fns";

import { ResponsivePie } from "@nivo/pie";

import StateData from "./StateData";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const [countryData, setCountryData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState("IN");
  const [countryError, setCountryError] = useState(false);
  const [globalSummary, setGlobalSummary] = useState(null);
  const [stateData, setStateData] = useState(null);

  const getCountriesSummary = async () => {
    let countries = await axios.get(`https://covid19.mathdro.id/api/daily`);

    //console.log("countries", countries);

    let countriesSummary = await axios.get(
      `https://covid19.mathdro.id/api/countries/IND`
    );

    //console.log("countriesSummary", countriesSummary);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://covid19.mathdro.id/api/countries`
      );

      const resp = await axios.get(`https://covid19.mathdro.id/api/`);
      const { data } = result;
      console.log("countries", countries);
      setCountries(data);
      setCountry("IND");
      setGlobalSummary(resp.data);
      const today = new Date();
      const formattedDate = `${today.getMonth() + 1}-${today.getDay() -
        1}-${today.getFullYear()}`;
      //   let daily = await axios.get(
      //     `https://covid19.mathdro.id/api/daily/${formattedDate}`
      //   );

      let stateReport = await axios.get(
        `https://api.rootnet.in/covid19-in/stats/latest`
      );

      //   const reduced = daily.reduce((acc,(item)=> []))

      console.log("DAILY", stateReport.data.data.regional);
      setStateData(stateReport.data.data.regional);
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

  const options = {
    animationEnabled: true,
    title: {
      text: "Global summary"
    },
    subtitles: [
      {
        text: "",
        verticalAlign: "center",
        fontSize: 24
        //dockInsidePlotArea: true
      }
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "##,###''",
        dataPoints: [
          {
            name: "Confirmed Cases",
            y: globalSummary && globalSummary.confirmed.value
          },
          { name: "Death", y: globalSummary && globalSummary.deaths.value },
          {
            name: "Recovered",
            y: globalSummary && globalSummary.recovered.value
          }
        ]
      }
    ]
  };

  const globalChartData = [
    {
      name: "Confirmed Cases",
      value: globalSummary && globalSummary.confirmed.value
    },
    {
      name: "Death",
      value: globalSummary && globalSummary.deaths.value
    },
    {
      name: "Recovered",
      value: globalSummary && globalSummary.recovered.value
    }
  ];

  const COLORS = ["#b69b2e", "#c22121", "#21c291"];
  const data01 = [
    {
      id: "scala",
      label: "scala",
      value: 312,
      color: "hsl(83, 70%, 50%)"
    },
    {
      id: "python",
      label: "python",
      value: 95,
      color: "hsl(16, 70%, 50%)"
    },
    {
      id: "javascript",
      label: "javascript",
      value: 448,
      color: "hsl(106, 70%, 50%)"
    },
    {
      id: "c",
      label: "c",
      value: 571,
      color: "hsl(314, 70%, 50%)"
    },
    {
      id: "go",
      label: "go",
      value: 266,
      color: "hsl(304, 70%, 50%)"
    }
  ];

  //   console.log("country data is ", countries);
  //console.log("global summary-->  ", globalSummary);
  return (
    <>
      {countries && (
        <Box>
          {" "}
          <Flex
            flex={1}
            sx={{
              width: "100%",
              padding: "16px",
              backgroundColor: "black",
              color: "#fff"
            }}
            flexDirection={["column", "row"]}
          >
            <Box width={1 / 2}>
              <Flex flexDirection="column">
                <Box sx={{ padding: "16px", fontSize: "1.5rem" }}>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    id="country"
                    name="country"
                    defaultValue="IND"
                    value={country}
                    onChange={e => {
                      setCountry(e.target.value);
                    }}
                    sx={{
                      backgroundColor: "black",
                      color: "white"
                    }}
                  >
                    {Object.entries(countries.countries).map(
                      ([country, value]) => (
                        <option
                          key={`${value}+${country}`}
                          value={countries.iso3[value]}
                        >
                          {country}
                        </option>
                      )
                    )}
                  </Select>
                </Box>

                {countryError && (
                  <Box
                    sx={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "1.5rem"
                    }}
                  >
                    No Data for this country
                  </Box>
                )}
                {countryData && (
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "16px",
                        fontSize: "1.5rem"
                      }}
                    >
                      Last updated :{" "}
                      {format(
                        new Date(countryData.lastUpdate),
                        "dd/MM/yyyy HH:mm:s"
                      )}
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "16px",
                        fontSize: "1.5rem"
                      }}
                    >
                      Confirmed Cases: {countryData.confirmed.value}
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "16px",
                        fontSize: "1.5rem"
                      }}
                    >
                      Deaths : {countryData.deaths.value}
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        padding: "16px",
                        fontSize: "1.5rem"
                      }}
                    >
                      Recovered: {countryData.recovered.value}
                    </Box>
                  </>
                )}
              </Flex>
            </Box>

            <Box sx={{ padding: "16px" }} width={["100%", 1 / 2]}>
              {globalSummary && (
                <Box width={["100%", 500]} height={250}>
                  <Flex justifyContent="center" alignItems="center">
                    <Box>
                      <Text sx={{ fontSize: "1.8rem" }}>Global Status</Text>
                    </Box>
                  </Flex>
                  <ResponsivePie
                    data={data01}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: "nivo" }}
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
          <Flex>{stateData && <StateData stateData={stateData} />}</Flex>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
