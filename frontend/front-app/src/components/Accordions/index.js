import React from "react";
import PropTypes from "prop-types";
import { LineChart } from "react-chartkick";
import Collapsible from "react-collapsible";

const AccordionTree = ({ data, currentDate, incrementCurrent }) => {
  const level = 1;
  const haschildren = item => {
    return item.children && item.children.length;
  };

  const AccordionTreeHeader = ({ title }) => {
    return (
      <>
        <span className="App-accordion-triangle"></span>
        <span className="App-accordion-decoration"></span>
        <span className="App-accordion-title">{title}</span>
      </>
    );
  };

  return (
    <div className="App-accordion">
      {data.map((item, i) => {
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
          <Collapsible
            classParentString="App-accordion-item"
            trigger={<AccordionTreeHeader title={title}></AccordionTreeHeader>}
            key={level + i}
          >
            <LineChart
              id={`chart_${item.id}`}
              width="62vw"
              height={180}
              curve={true}
              colors={["#ff6347"]}
              data={{
                [start_date]: start,
                [currentDate]: current,
                [end_date]: target
              }}
            />
            <footer className="App-accordion-footer">
              <span className="App-accordion-decoration"></span>
              <button onClick={() => incrementCurrent(id - 1)}>
                Increase current
              </button>
              <span className="App-accordion-counter">
                Counter: {isCounter}
              </span>
            </footer>
            {haschildren(item) && (
              <AccordionTree
                data={item.children}
                level={level + 1}
                currentDate={currentDate}
                incrementCurrent={incrementCurrent}
              />
            )}
          </Collapsible>
        );
      })}
    </div>
  );
};

const Accordion = ({ objectives, currentDate, incrementCurrent }) => {
  return (
    <AccordionTree
      data={objectives}
      currentDate={currentDate}
      incrementCurrent={incrementCurrent}
    ></AccordionTree>
  );
};

Accordion.propTypes = {
  objectives: PropTypes.array.isRequired
};

export default Accordion;
