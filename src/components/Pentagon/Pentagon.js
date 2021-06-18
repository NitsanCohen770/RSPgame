import React from 'react';
import pentagon from '../../assets/bg-pentagon.svg';
import PropTypes from 'prop-types';
import './Pentagon.css';
const Pentagon = ({ children }) => {
  return (
    <>
      <div className="pentagon">
        {children}
        <img src={pentagon} alt="pentagon" />
      </div>
      <div className="hex">
        <div className="corner-1"></div>
        <div className="corner-2"></div>
        <div className="corner-3"></div>
        <div className="corner-4"></div>
      </div>
      <div className="mobile">{children}</div>
    </>
  );
};

Pentagon.propTypes = {};

export default Pentagon;
