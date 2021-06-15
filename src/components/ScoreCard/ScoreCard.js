import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { card, score, number } from './ScoreCard.module.css';
import GameContext from '../../context/gameContext';
const ScoreCard = () => {
  const gameCTX = useContext(GameContext);
  return (
    <div className={card}>
      <div className={score}>
        SCORE<div className={number}>{gameCTX.score}</div>{' '}
      </div>
    </div>
  );
};

ScoreCard.propTypes = {};

export default ScoreCard;
