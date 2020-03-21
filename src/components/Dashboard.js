import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box } from "rebass";
import CanvasJSReact from "../charts/canvasjs.react";
import { Label, Select } from "@rebass/forms";
import { format } from "date-fns";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const [countryData, setCountryData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState("IN");
  const [countryError, setCountryError] = useState(false);
  const [globalSummary, setGlobalSummary] = useState(null);
  const [dailyData, setDailyData] = useState(null);

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

      let daily = await axios.get(`https://covid19.mathdro.id/api/confirmed`);

      //   const reduced = daily.reduce((acc,(item)=> []))
      console.log("DAILY", daily);
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
              {globalSummary && <CanvasJSChart options={options} />}
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
