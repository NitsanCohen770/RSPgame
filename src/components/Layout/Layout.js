import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ScoreCard from '../ScoreBox/ScoreBox';
import RulesButton from '../RulesButton/RulesButton';
import Pentagon from '../Pentagon/Pentagon';
import GameButtons from '../GameButtons/GameButtons';
import GameContext from '../../context/gameContext';
import Picked from '../Picked/Picked';
const Layout = () => {
  const gameCTX = useContext(GameContext);
  console.log(gameCTX);
  return (
    <>
      <ScoreCard />
      {gameCTX.isPlaying && (
        <GameButtons
          lizard={gameCTX.pickedLizard}
          scissors={gameCTX.pickedScissors}
          paper={gameCTX.pickedPaper}
          spock={gameCTX.pickedSpock}
          rock={gameCTX.pickedRock}
          location="gameOver"
        />
      )}
      {gameCTX.isPlaying && <Picked />}
      {!gameCTX.isPlaying && (
        <GameButtons lizard scissors paper spock rock location="pick" />
      )}
      {!gameCTX.isPlaying && <Pentagon />}
      <RulesButton />
    </>
  );
};

Layout.propTypes = {};

export default Layout;
