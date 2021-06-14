import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RulesPage from '../RulesPage/RulesPage';
import { position } from './RulesButton.module.css';
const RulesButton = () => {
  const [isDisplayingRules, setIsDisplayingRules] = useState(false);
  const displayRulesHandler = () => {
    setIsDisplayingRules(prevState => !prevState);
  };
  return (
    <>
      <div className={position} onClick={displayRulesHandler}>
        RULES
      </div>
      {isDisplayingRules && (
        <RulesPage displayRulesHandler={displayRulesHandler} />
      )}
    </>
  );
};

RulesButton.propTypes = {};

export default RulesButton;
