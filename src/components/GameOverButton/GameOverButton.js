import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { position, text, button } from './GameOverButton.module.css';
import FadeIn from 'react-fade-in';
import GameContext from '../../context/gameContext';
const GameOverButton = () => {
  const gameCTX = useContext(GameContext);
  return (
    <FadeIn delay="2300">
      <div className={position}>
        <div className={text}>
          {gameCTX.isPlayerWinner ? 'YOU WIN' : 'YOU LOSE'}
        </div>
        <div className={button} onClick={gameCTX.resetGame}>
          PLAY AGAIN
        </div>
      </div>
    </FadeIn>
  );
};

GameOverButton.propTypes = {};

export default GameOverButton;
