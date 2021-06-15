import React from 'react';
import PropTypes from 'prop-types';
import { position } from './ScoreBox.module.css';
import Logo from '../Logo/Logo';
import ScoreCard from '../ScoreCard/ScoreCard';
const ScoreBox = () => {
  return (
    <div>
      <div className={position}>
        <Logo />
        <ScoreCard />
      </div>
    </div>
  );
};

ScoreBox.propTypes = {};

export default ScoreBox;
