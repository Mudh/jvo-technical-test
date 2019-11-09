import React from "react";
import PropTypes from "prop-types";
import { LineChart } from "react-chartkick";
import "chart.js";

const List = ({ objectives, currentDate, incrementCurrent }) => {
  return (
    <ul className="App-list">
      {objectives.map((item, index) => {
        const {
          id,
          title,
          start_date,
          start,
          current,
          end_date,
          target,
          counter
        } = item;
        const pad = val => (val < 10 ? `0${val}` : val);
        const isCounter = counter === undefined ? "00" : pad(counter);

        return (
          <li key={id} className="App-list-item">
            <header className="App-list-item-header">
              <h2>{title}</h2>
              <span className="App-list-decoration"></span>
            </header>
            <LineChart
              width="80vw"
              height={180}
              curve={true}
              colors={["#ff6347"]}
              data={{
                [start_date]: start,
                [currentDate]: current,
                [end_date]: target
              }}
            />
            <footer className="App-list-item-footer">
              <span className="App-list-decoration"></span>
              <button onClick={() => incrementCurrent(index)}>
                Increase current
              </button>
              <span className="App-list-counter">Counter: {isCounter}</span>
            </footer>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  objectives: PropTypes.array.isRequired,
  currentDate: PropTypes.string.isRequired,
  incrementCurrent: PropTypes.func.isRequired
};

export default List;
