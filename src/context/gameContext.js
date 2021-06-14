import React from 'react';

const GameContext = React.createContext({
  score: null,
  startGame: () => {},
  lostGame: () => {},
  wonGame: () => {},
  playerPicked: () => {},
  isPlaying: false,
  pickedLizard: false,
  pickedPaper: false,
  pickedRock: false,
  pickedSpock: false,
  pickedScissors: false,
});

export default GameContext;
