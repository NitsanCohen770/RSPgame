import React from 'react';
import PropTypes from 'prop-types';
import { lizard, wrapper } from './GameButtons.module.css';
import lizardImage from '../../assets/icon-lizard.svg';
const GameButtons = ({ gameButton }) => {
  if (gameButton === 'lizard') {
    return (
      <div className={wrapper}>
        <img className={lizard} src={lizardImage} alt="lizard button" />
      </div>
    );
  }
};

GameButtons.propTypes = {};

export default GameButtons;
