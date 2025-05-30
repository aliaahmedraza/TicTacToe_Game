import { useState } from 'react';
import checkWinner from '../utils/checkWinner';

export const useTicTacToe = () => {
  const [board, setBoard] = useState<string[][]>(
    Array(3).fill("").map(() => Array(3).fill(""))
  );
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== "") return;

    const newBoard = board.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? currentPlayer : c))
    );
    setBoard(newBoard); 
    const winner = checkWinner(newBoard)
    if (winner) {
      setTimeout(()=>
        alert(`Player ${winner} Wins!`),500)
      setTimeout(()=>resetGame(),2000)
      
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(3).fill("").map(() => Array(3).fill("")));
    setCurrentPlayer("X");
  };

  return { board, currentPlayer, handleCellClick, resetGame };
};