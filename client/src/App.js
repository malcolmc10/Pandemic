import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import './App.css';
import Map from './Map'
import InfoBox from './InfoBox'


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }));

          setCountries(countries);
        });
    };
    getCountriesData();

  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    // console.log('Yoooooooo', countryCode);

    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div classname="app__left">
        <div className="app__header">
          <h1>COVID Country </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country} >

              {/* Loop through all the countries and show in the options */}

              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }




            </Select>

          </FormControl>


        </div>

        <div className="app__stats">

          <InfoBox title="Coronavirus Cases" cases={123} total={2000} />

          <InfoBox title="Recovered" cases={1235} total={3000} />

          <InfoBox title="Deaths" cases={1234} total={123456} />

        </div>

        <Map />


      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* table and graph */}
          <h3>Worldwide New Cases</h3>

        </CardContent>


      </Card>



    </div>
  );
}

export default App;
