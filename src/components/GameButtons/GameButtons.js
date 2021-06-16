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
  house_game__over,
  winner_animation,
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
          gameCTX.pickedLizard && player_game__over
        } ${gameCTX.housePickedLizard && house_game__over} ${
          gameCTX.pickedLizard && gameCTX.isPlayerWinner && winner_animation
        } ${
          gameCTX.isHouseWinner && gameCTX.housePickedLizard && winner_animation
        } `}
      >
        <img src={lizardImage} alt="lizard button" />
      </div>
    );
  }
  if (rock) {
    buttons.push(
      <div
        key="4"
        onClick={() => gameCTX.playerPicked('pickedRock')}
        className={`${rock_styles} ${location === 'pick' && rock_pick} ${
          gameCTX.housePickedRock && house_game__over
        } ${gameCTX.pickedRock && player_game__over}  ${
          gameCTX.isPlayerWinner && gameCTX.pickedRock && winner_animation
        } ${
          gameCTX.isHouseWinner && gameCTX.housePickedRock && winner_animation
        } `}
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
        onClick={() => gameCTX.playerPicked('pickedPaper')}
        className={`${paper_styles} ${location === 'pick' && paper_pick} ${
          gameCTX.housePickedPaper && house_game__over
        } ${gameCTX.pickedPaper && player_game__over}  ${
          gameCTX.isPlayerWinner && gameCTX.pickedPaper && winner_animation
        } ${
          gameCTX.isHouseWinner && gameCTX.housePickedPaper && winner_animation
        }`}
      >
        <img src={paperImage} alt="paper button" />
      </div>
    );
  }
  if (spock) {
    buttons.push(
      <div
        key="2"
        onClick={() => gameCTX.playerPicked('pickedSpock')}
        className={`${spock_styles} ${location === 'pick' && spock_pick} ${
          gameCTX.housePickedSpock && house_game__over
        } ${gameCTX.pickedSpock && player_game__over}  ${
          gameCTX.pickedSpock && gameCTX.isPlayerWinner && winner_animation
        } ${
          gameCTX.isHouseWinner && gameCTX.housePickedSpock && winner_animation
        }`}
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
        onClick={() => gameCTX.playerPicked('pickedScissors')}
        className={`${scissors_styles} ${
          location === 'pick' && scissors_pick
        } ${gameCTX.housePickedScissors && house_game__over} ${
          gameCTX.pickedScissors && player_game__over
        }  ${
          gameCTX.pickedScissors && gameCTX.isPlayerWinner && winner_animation
        } ${
          gameCTX.isHouseWinner &&
          gameCTX.housePickedScissors &&
          winner_animation
        }`}
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
