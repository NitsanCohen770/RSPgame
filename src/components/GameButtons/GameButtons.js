import React, { useContext } from 'react';
import GameContext from '../../context/gameContext';
import PropTypes from 'prop-types';
import {
  lizard_styles,
  rock_styles,
  paper_styles,
  spock_styles,
  scissors_styles,
  lizard_pick,
  rock_pick,
  paper_pick,
  spock_pick,
  scissors_pick,
  player_game__over,
} from './GameButtons.module.css';
import lizardImage from '../../assets/icon-lizard.svg';
import paperImage from '../../assets/icon-paper.svg';
import rockImage from '../../assets/icon-rock.svg';
import scissorsImage from '../../assets/icon-scissors.svg';
import spockImage from '../../assets/icon-spock.svg';
const GameButtons = ({ lizard, scissors, paper, spock, rock, location }) => {
  const buttons = [];
  const gameCTX = useContext(GameContext);
  if (lizard) {
    buttons.push(
      <div
        key="5"
        onClick={() => gameCTX.playerPicked('pickedLizard')}
        className={`${lizard_styles} ${location === 'pick' && lizard_pick} ${
          location === 'gameOver' && player_game__over
        }`}
      >
        <img src={lizardImage} alt="lizard button" />
      </div>
    );
  }
  if (rock) {
    buttons.push(
      <div
        key="4"
        // onClick={() => startGameHandler('rock')}
        className={`${rock_styles} ${location === 'pick' && rock_pick}`}
      >
        {' '}
        <img src={rockImage} alt="rock button" />
      </div>
    );
  }
  if (paper) {
    buttons.push(
      <div
        key="3"
        // onClick={() => startGameHandler('paper')}
        className={`${paper_styles} ${location === 'pick' && paper_pick}`}
      >
        <img src={paperImage} alt="paper button" />
      </div>
    );
  }
  if (spock) {
    buttons.push(
      <div
        key="2"
        // onClick={() => startGameHandler('spock')}
        className={`${spock_styles} ${location === 'pick' && spock_pick}`}
      >
        {' '}
        <img src={spockImage} alt="spock button" />
      </div>
    );
  }
  if (scissors) {
    buttons.push(
      <div
        key="1"
        // onClick={() => startGameHandler('scissors')}
        className={`${scissors_styles} ${location === 'pick' && scissors_pick}`}
      >
        {' '}
        <img src={scissorsImage} alt="scissors button" />
      </div>
    );
  }

  return buttons.map(button => button);
};

GameButtons.propTypes = {};

export default GameButtons;
