import React from 'react';
import PropTypes from 'prop-types';
import { card, score, number } from './ScoreCard.module.css';
const ScoreCard = () => {
  return (
    <div className={card}>
      <div className={score}>
        SCORE<div className={number}>12</div>{' '}
      </div>
    </div>
  );
};

ScoreCard.propTypes = {};

export default ScoreCard;
