import React, { useState } from "react";
import PropTypes from "prop-types";
import { LineChart } from "react-chartkick";
import "chart.js";

const List = ({ objectives, currentDate }) => {
  return (
    <ul className="App-list">
      {objectives.map(item => {
        const {
          id,
          title,
          start_date,
          start,
          current,
          end_date,
          target
        } = item;
        const [currentCount, setCurrent] = useState(current);
        const [incrementNumber, setNumber] = useState(0);

        const increment = () => {
          setCurrent(currentCount + 1);
          setNumber(incrementNumber + 1);
        };

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
                [currentDate]: currentCount,
                [end_date]: target
              }}
            />
            <footer className="App-list-item-footer">
              <span className="App-list-decoration"></span>
              <button onClick={increment}>Increase current</button>
              <span className="App-list-counter">
                Counter: {incrementNumber}
              </span>
            </footer>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  objectives: PropTypes.array.isRequired,
  currentDate: PropTypes.string.isRequired
};

export default List;
