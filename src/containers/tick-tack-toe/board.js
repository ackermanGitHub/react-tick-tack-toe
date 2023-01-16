import React from "react";
import Square from "./square";
import { BoardContainer } from "./styles/tick-tack-toe";

export default function Board({squares, onClick, xIsNext, ...restProps}) {
  
    function renderSquare(i) {
      return (
        <Square
          value={squares[i]}
          onClick={() => onClick(i)}
        />
      );
    }

    return (
      <BoardContainer {...restProps}>
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </BoardContainer>
    );
}