import { useReducer } from 'react';
import GameContext from './gameContext';

const defaultGameState = {
  score: 0,
  isPlaying: false,
  pickedLizard: false,
  pickedPaper: false,
  pickedRock: false,
  pickedSpock: false,
  pickedScissors: false,
};

const gameReducer = (state, action) => {
  if (action.type === 'WINNER') {
    return { ...state, score: state.score + 1 };
  }
  if (action.type === 'LOSER') {
    return { ...state, score: state.score - 1 };
  }
  if (action.type === 'PLAYING') {
    return { ...state, isPlaying: !state.isPlaying };
  }
  if (action.type === 'PICKED') {
    console.log(state);
    return { ...state, [action.chosen]: true, isPlaying: !state.isPlaying };
  }
};

const GameProvider = props => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );
  const gameWonHandler = () => {
    dispatchGameAction({ type: 'WINNER' });
  };
  const gameLostHandler = () => {
    dispatchGameAction({ type: 'LOSER' });
  };
  const gameStartHandler = () => {
    dispatchGameAction({ type: 'PLAYING' });
  };
  const playerPickedHandler = propertyName => {
    dispatchGameAction({ type: 'PICKED', chosen: propertyName });
  };
  const gameContext = {
    score: gameState.score,
    startGame: gameStartHandler,
    lostGame: gameLostHandler,
    wonGame: gameWonHandler,
    playerPicked: playerPickedHandler,
    isPlaying: gameState.isPlaying,
    pickedLizard: gameState.pickedLizard,
    pickedPaper: gameState.pickedPaper,
    pickedRock: gameState.pickedRock,
    pickedSpock: gameState.pickedSpock,
    pickedScissors: gameState.pickedScissors,
  };
  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
