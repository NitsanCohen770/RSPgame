import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

import { picked, house_game__loading } from './Picked.module.css';
const Picked = () => {
  return (
    <FadeIn>
      <div className={house_game__loading}></div>
      <div className={picked}>
        <div>YOU PICKED</div>
        <div>THE HOUSE PICKED</div>
      </div>
    </FadeIn>
  );
};

Picked.propTypes = {};

export default Picked;
