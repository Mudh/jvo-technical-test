import React from 'react';
import PropTypes from 'prop-types';

const Header = ({currentOvertarget}) => {
    return (
        <header className="App-header">
          <p>
           <span>
           {`${currentOvertarget} objectives `}
           </span>
            have their current value over their target
          </p>
        </header>
    );
  }

Header.propTypes = {
  currentOvertarget: PropTypes.number.isRequired,
}

export default Header;
