import { useEnhancedReducer } from 'enhanced-reducer/';
import GameContext from './gameContext';

const defaultGameState = {
  score: 0,
  isPlayerWinner: false,
  isHouseWinner: false,
  isPlaying: false,
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
};

const gameReducer = (state, action) => {
  if (action.type === 'WINNER') {
    return { ...state, score: state.score + 1, isPlayerWinner: true };
  }
  if (action.type === 'LOSER') {
    return { ...state, score: state.score - 1, isHouseWinner: true };
  }
  if (action.type === 'PLAYING') {
    return { ...state, isPlaying: !state.isPlaying };
  }
  if (action.type === 'PICKED') {
    return { ...state, [action.chosen]: true, isPlaying: !state.isPlaying };
  }
  if (action.type === 'HOUSE_PICKED') {
    return { ...state, [action.houseChosen]: true };
  }
  if (action.type === 'RESET') {
    return { ...defaultGameState, score: action.score };
  }
};

const GameProvider = props => {
  const [gameState, dispatchGameAction, getState] = useEnhancedReducer(
    gameReducer,
    defaultGameState
  );
  const checkWinnerHandler = () => {
    if (
      getState().pickedLizard &&
      (getState().housePickedSpock || getState().housePickedPaper)
    ) {
      gameWonHandler();
    } else if (
      getState().pickedPaper &&
      (getState().housePickedRock || getState().housePickedSpock)
    ) {
      gameWonHandler();
    } else if (
      getState().pickedSpock &&
      (getState().housePickedScissors || getState().housePickedRock)
    ) {
      gameWonHandler();
    } else if (
      getState().pickedRock &&
      (getState().housePickedScissors || getState().housePickedLizard)
    ) {
      gameWonHandler();
    } else if (
      getState().pickedScissors &&
      (getState().housePickedLizard || getState().housePickedPaper)
    ) {
      gameWonHandler();
    } else {
      gameLostHandler();
    }
  };
  const gameWonHandler = () => {
    dispatchGameAction({ type: 'WINNER' });
  };
  const gameLostHandler = () => {
    dispatchGameAction({ type: 'LOSER' });
  };
  const gameStartHandler = () => {
    dispatchGameAction({ type: 'PLAYING' });
  };
  const housePickedHandler = playerPicked => {
    const houseOptions = [
      'housePickedLizard',
      'housePickedPaper',
      'housePickedRock',
      'housePickedSpock',
      'housePickedScissors',
    ];
    let randomNumber = Math.floor(Math.random() * 5);
    while (
      playerPicked.split('icked')[1] ===
      houseOptions[randomNumber].split('icked')[1]
    ) {
      randomNumber = Math.floor(Math.random() * 5);
    }
    dispatchGameAction({
      type: 'HOUSE_PICKED',
      houseChosen: houseOptions[randomNumber],
    });

    checkWinnerHandler();
  };
  const playerPickedHandler = propertyName => {
    dispatchGameAction({ type: 'PICKED', chosen: propertyName });
    setTimeout(() => {
      housePickedHandler(propertyName);
    }, 1500);
  };
  const resetGameHandler = () => {
    dispatchGameAction({ type: 'RESET', score: getState().score });
  };
  const gameContext = {
    score: gameState.score,
    startGame: gameStartHandler,
    resetGame: resetGameHandler,
    isPlayerWinner: gameState.isPlayerWinner,
    isHouseWinner: gameState.isHouseWinner,
    playerPicked: playerPickedHandler,
    isPlaying: gameState.isPlaying,
    pickedLizard: gameState.pickedLizard,
    pickedPaper: gameState.pickedPaper,
    pickedRock: gameState.pickedRock,
    pickedSpock: gameState.pickedSpock,
    pickedScissors: gameState.pickedScissors,
    housePickedLizard: gameState.housePickedLizard,
    housePickedPaper: gameState.housePickedPaper,
    housePickedRock: gameState.housePickedRock,
    housePickedSpock: gameState.housePickedSpock,
    housePickedScissors: gameState.housePickedScissors,
  };
  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
