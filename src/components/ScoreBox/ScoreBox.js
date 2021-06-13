import React from 'react';
import PropTypes from 'prop-types';
import { position } from './ScoreBox.module.css';
import Logo from '../Logo/Logo';
import ScoreCard from '../ScoreCard/ScoreCard';
const ScoreBox = () => {
  return (
    <div className={position}>
      <Logo />
      <ScoreCard />
    </div>
  );
};

ScoreBox.propTypes = {};

export default ScoreBox;
