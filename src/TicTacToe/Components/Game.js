import React, { useState } from 'react';
import Board from './Board';
import * as game from '../game';

const initialSquares = new Array(9).fill(null);
const initialCurrentPlayer = game.Player.O;

const Game = () => {
  const [squares, setSquares] = useState(initialSquares);
  const [currentPlayer, setCurrentPlayer] = useState(initialCurrentPlayer);

  const gameHasEnded = game.hasEnded(squares);
  const winner = gameHasEnded ? game.determineWinner(squares) : null;

  function handleBoardClick(index) {
    if (gameHasEnded || null !== squares[index]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    setCurrentPlayer(game.opponentOf(currentPlayer));
  }

  function handleResetClick() {
    setSquares(initialSquares);
    setCurrentPlayer(initialCurrentPlayer);
  }

  return (
    <div className="Game">
      <Board squares={squares} onClick={handleBoardClick} />
      <p>
        {
          gameHasEnded
            ? (null !== winner ? `The winner is ${winner}!` : 'It\'s a draw!')
            : `Current player: ${currentPlayer}`
        }
      </p>
      { game.hasStarted(squares) && <button onClick={handleResetClick}>Reset</button> }
    </div>
  );
}

export default Game;
