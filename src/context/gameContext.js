import React from 'react';

const GameContext = React.createContext({
  score: null,
  resetGame: () => {},
  startGame: () => {},
  lostGame: () => {},
  wonGame: () => {},
  playerPicked: () => {},
  isPlaying: false,
  isPlayerWinner: false,
  isHouseWinner: false,
  pickedLizard: false,
  pickedPaper: false,
  pickedRock: false,
  pickedSpock: false,
  pickedScissors: false,
  housePickedLizard: false,
  housePickedPaper: false,
  housePickedRock: false,
  housePickedSpock: false,
  housePickedScissors: false,
});

export default GameContext;
