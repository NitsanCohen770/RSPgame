import React from 'react';
import PropTypes from 'prop-types';
import ScoreCard from '../ScoreBox/ScoreBox';
import RulesButton from '../RulesButton/RulesButton';
import Pentagon from '../Pentagon/Pentagon';
import GameButtons from '../GameButtons/GameButtons';

const Layout = () => {
  return (
    <>
      <ScoreCard />
      <GameButtons gameButton="lizard" />
      <Pentagon />
      <RulesButton />
    </>
  );
};

Layout.propTypes = {};

export default Layout;
