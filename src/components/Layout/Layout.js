import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ScoreCard from '../ScoreBox/ScoreBox';
import RulesButton from '../RulesButton/RulesButton';
import Pentagon from '../Pentagon/Pentagon';
import GameButtons from '../GameButtons/GameButtons';
import GameContext from '../../context/gameContext';
import Picked from '../Picked/Picked';
import GameOverButton from '../GameOverButton/GameOverButton';
const Layout = () => {
  const gameCTX = useContext(GameContext);
  console.log(gameCTX);
  return (
    <>
      <ScoreCard />
      {gameCTX.isPlaying && (
        <GameButtons
          lizard={gameCTX.pickedLizard || gameCTX.housePickedLizard}
          scissors={gameCTX.pickedScissors || gameCTX.housePickedScissors}
          paper={gameCTX.pickedPaper || gameCTX.housePickedPaper}
          spock={gameCTX.pickedSpock || gameCTX.housePickedSpock}
          rock={gameCTX.pickedRock || gameCTX.housePickedRock}
          location="gameOver"
        />
      )}
      {gameCTX.isPlaying && <GameOverButton />}
      {gameCTX.isPlaying && <Picked />}

      {!gameCTX.isPlaying && (
        <Pentagon>
          <GameButtons lizard scissors paper spock rock location="pick" />
        </Pentagon>
      )}
      <RulesButton />
    </>
  );
};

Layout.propTypes = {};

export default Layout;
