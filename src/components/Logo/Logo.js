import React from 'react';
import PropTypes from 'prop-types';
import { position } from './Logo.module.css';
import logo from '../../assets/logo-bonus.svg';
const Logo = () => {
  return (
    <>
      <img className={position} src={logo} alt="game logo" />
    </>
  );
};

Logo.propTypes = {};

export default Logo;
