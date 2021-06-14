import React from 'react';
import PropTypes from 'prop-types';
import { lizard, rock, paper, spock, scissors } from './GameButtons.module.css';
import lizardImage from '../../assets/icon-lizard.svg';
import paperImage from '../../assets/icon-paper.svg';
import rockImage from '../../assets/icon-rock.svg';
import scissorsImage from '../../assets/icon-scissors.svg';
import spockImage from '../../assets/icon-spock.svg';
const GameButtons = ({ gameButton }) => {
  if (gameButton === 'lizard') {
    return (
      <>
        <div className={lizard}>
          <img src={lizardImage} alt="lizard button" />
        </div>
        <div className={rock}>
          {' '}
          <img src={rockImage} alt="rock button" />
        </div>
        <div className={paper}>
          <img src={paperImage} alt="paper button" />
        </div>
        <div className={spock}>
          {' '}
          <img src={spockImage} alt="spock button" />
        </div>
        <div className={scissors}>
          {' '}
          <img src={scissorsImage} alt="scissors button" />
        </div>
      </>
    );
  }
};

GameButtons.propTypes = {};

export default GameButtons;
