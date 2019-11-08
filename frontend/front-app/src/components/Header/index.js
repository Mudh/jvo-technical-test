import React from "react";
import PropTypes from "prop-types";

const Header = ({ currentOvertarget, random }) => {
  return (
    <header className="App-header">
      <p>
        <span>{`${currentOvertarget} objectives `}</span>
        have their current value over their target
      </p>
      <button type="button" onClick={random}>
        Random Increase
      </button>
    </header>
  );
};

Header.propTypes = {
  currentOvertarget: PropTypes.number.isRequired,
  random: PropTypes.func.isRequired
};

export default Header;
