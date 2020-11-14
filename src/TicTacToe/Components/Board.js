import React from 'react';

const Board = props => {
  return (
    <div className="Board">
      <div className="Board-squares">
        {props.squares.map((square, index) => {
          return (
            <div key={index} onClick={() => props.onClick(index)}>
              {square}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
