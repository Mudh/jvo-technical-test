import React from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

const Item = ({ data }) => {
  return (
    <div>
      {data.map(m => {
        return (
          <Collapsible>
            <p>{m.title}</p>
            {m.children && <Item data={m.children} key={m.id} />}
          </Collapsible>
        );
      })}
    </div>
  );
};

const Accordion = ({ objectives }) => {
  console.log("nested data", objectives);

  return <Collapsible trigger="Start here"></Collapsible>;
};

Accordion.propTypes = {
  objectives: PropTypes.array.isRequired
};

export default Accordion;
