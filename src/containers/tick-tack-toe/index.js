import React, { useState } from "react";
import Board from "./board";
import { MainContainer, InfoContainer, GameContainer } from "./styles/tick-tack-toe";
import Header from "../../common/header";
import Footer from "../../common/footer";

export default function Game() {
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null),
            lastPlay: Array(2),
        }
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner)
      status = 'Winner: ' + winner;
    else 
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');

    function handleClick(i) {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(
          newHistory.concat([{
            squares: squares,
            lastPlay: [i%3,Math.floor(i/3)],
          }]),
        );
        setXIsNext(!xIsNext);
        setStepNumber(newHistory.length);
    }
    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    return (
        <MainContainer>
          <Header/>
          <GameContainer>
            <Board squares={current.squares} onClick={(i) => handleClick(i)} xIsNext={xIsNext} />
            <InfoContainer>
              {status}
              <ol>
                  {
                      history.map((step, move) => {
                          const desc = move ?
                              `Go to move #${move}` :
                              'Go to game start';
                          const pos = move ?
                              `col:${history[move].lastPlay[0]}, fil:${history[move].lastPlay[1]}` :
                              `Do a move`;
                          return (
                              <li key={move}>
                                  <button onClick={() => jumpTo(move)}>{desc}</button>
                                  <p>{pos}</p>
                              </li>
                          );
                      })
                  }
              </ol>
            </InfoContainer>
          </GameContainer>
          <Footer/>
        </MainContainer>
    );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}