import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import List from "./components/List";
import Accordions from "./components/Accordions";

import "./App.css";

const App = ({
  fetchObjectives,
  data,
  currentDate,
  currentOvertarget,
  incrementCurrent,
  randomIncrement,
  nestedData
}) => {
  useEffect(() => fetchObjectives(), []);

  return (
    <div className="App">
      <Header currentOvertarget={currentOvertarget} random={randomIncrement} />
      <main className="App-main">
        <h1>Objectives List</h1>
        <List
          objectives={data}
          currentDate={currentDate}
          incrementCurrent={incrementCurrent}
        />
        <h1>Tree view</h1>
        <Accordions objectives={nestedData} />
      </main>
    </div>
  );
};

App.propTypes = {
  fetchObjectives: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  currentDate: PropTypes.string.isRequired,
  currentOvertarget: PropTypes.number.isRequired
};

export default App;
