import React from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID Country  </h1>
      <FormControl className="app__dropdown">
        <Select
        variant="outlined"
        value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Op 2</MenuItem>
          <MenuItem value="worldwide">Op 3</MenuItem>
          <MenuItem value="worldwide">Op 4</MenuItem>


        </Select>

      </FormControl>

    {/* Headeer  */}
    {/* Title + Select input dropdown field */}



    {/* Infoboxes */}
    {/* Infoboxes */}
    {/* Infoboxes */}

    {/* Table */}
     {/* Graph */}



    {/* Map */}



    </div>
  );
}

export default App;
