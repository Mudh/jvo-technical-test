import React from "react";
import PropTypes from "prop-types";
import { LineChart } from "react-chartkick";
import Collapsible from "react-collapsible";

const AccordionTree = ({ data }) => {
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
        return (
          <Collapsible
            classParentString="App-accordion-item"
            trigger={
              <AccordionTreeHeader title={item.title}></AccordionTreeHeader>
            }
            key={level + i}
          >
            <LineChart
              id={`chart_${item.id}`}
              width="71vw"
              height={180}
              curve={true}
              colors={["#ff6347"]}
              data={{
                [item.start_date]: item.start,
                [item.currentDate]: item.current,
                [item.end_date]: item.target
              }}
            />
            {haschildren(item) && (
              <AccordionTree data={item.children} level={level + 1} />
            )}
          </Collapsible>
        );
      })}
    </div>
  );
};

const Accordion = ({ objectives }) => {
  console.log("nested data", objectives.map(item => item));

  return <AccordionTree data={objectives}></AccordionTree>;
};

Accordion.propTypes = {
  objectives: PropTypes.array.isRequired
};

export default Accordion;
