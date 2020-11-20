# Overview
# COVID Country
This application allows the user to track the number of cases, deaths, and recoveries of COVID dailyby country. This application shows the number of cases through bubbles, line graphs that show growth over time, and through numerical values. The information was gather and used from the disease.sh API and I utilized Chart.js and leaflet to create the linegraph and interactive map.

## Deployed Site:
https://covid-country-e9bff.web.app/


# MVP

1. Create an application that allows the user to use this tool on desktop, and mobile devices. 
2. Create an interactive map that allows the user to select countries and have the tooltip show the numbers of cases, deaths, and recoveries.
3. Develop a drop down window that allows the user to select the country that they are interested in learning about their COVID updates.
4. Find and use a tool that allows me to show the data over a long period of time. (Chose Chart.js)
5. Apply a chart that shows the number of cases for each country in the world and list them from greatest to fewest.
6. Learn and create a user experience utilizing CSS and Material UI. 



# Libraries and Dependencies
```
Material UI
React 
Chart.js
Leaflet
 
```



# Wireframes

https://drive.google.com/file/d/1-wQLI4ZKIWJbmEGynvDhYBdMvFZhtHgu/view?usp=sharing



# Component Hierarchy
```
src
      
      |__ App.css
      |__ App.js
      |__ Login.jsx
      |__ index.css
      |__ index.js
      |__ infoBox.css
      |__ infoBox.jsx
      |__ LineGraph.js
      |__ Map.css
      |__ Map.jsx
      |__ Table.css
      |__ Table.jsx
      |__ util.js
       
   ```  




# Post-MVP
```
Make it so that when they change the bubbles from recoveries to Deaths to Cases the color of the Bubbles changes.
Add a footer to share my github, link to API, Linkedin, and name.
Add a feature that all the Linegraph to change colors when recoveries and Deaths are selected.
Make it so the map goes to the country when selected in the drop down.
```
# Code Showcase

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

            const sortedData = sortData(data);

          setTableData(sortedData);
            setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();

  }, []);


# Code Issues & Resolutions
