import React from 'react';
import PropTypes from 'prop-types';
import rulesPage from '../../assets/image-rules-bonus.svg';
import closeButton from '../../assets/icon-close.svg';
import {
  rules,
  rules_image,
  rules_text,
  close_button,
} from './RulesPage.module.css';
const RulesPage = ({ displayRulesHandler }) => {
  return (
    <div className={rules}>
      <div className={rules_text}>RULES</div>
      <img className={rules_image} src={rulesPage} alt="rules page" />
      <img
        onClick={displayRulesHandler}
        className={close_button}
        src={closeButton}
        alt="close button"
      />
    </div>
  );
};

RulesPage.propTypes = {};

export default RulesPage;
