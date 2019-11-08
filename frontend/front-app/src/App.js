import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import List from "./components/List";

import "./App.css";

const App = ({
  fetchObjectives,
  data,
  currentDate,
  currentOvertarget,
  incrementCurrent,
  randomIncrement
}) => {
  useEffect(() => fetchObjectives(), []);

  return (
    <div className="App">
      <Header currentOvertarget={currentOvertarget} random={randomIncrement} />
      <main className="App-main">
        <List
          objectives={data}
          currentDate={currentDate}
          incrementCurrent={incrementCurrent}
        />
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
