export const Player = { O: 'O', X: 'X' };

export const opponentOf = player => ({ [Player.O]: Player.X, [Player.X]: Player.O }[player]);

export const hasStarted = squares => squares.some(square => null !== square);

export const isBoardFull = squares => squares.every(square => null !== square);

export const hasEnded = squares => null !== determineWinner(squares) || isBoardFull(squares);

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Vertical
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Horizontal
  [0, 4, 8], [2, 4, 6],            // Diagonal
];

export const determineWinner = squares => winningLines.reduce(
  (winner, line) => {
    if (null !== winner) {
      return winner;
    }

    const [first, second, third] = line;

    if (null !== squares[first] && squares[first] === squares[second] && squares[second] === squares[third]) {
      return squares[first];
    }

    return null;
  },
  null
);
