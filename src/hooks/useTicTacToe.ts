import { useState } from 'react';
import checkWinner from '../utils/checkWinner';

export const useTicTacToe = () => {
  const [board, setBoard] = useState<string[][]>(
    Array(3).fill("").map(() => Array(3).fill(""))
  );
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winnerCount, setWinnerCount] = useState<{ X: number; O: number }>({
    X: 0,
    O: 0,
  });

  const resetGame = () => {
    setBoard(Array(3).fill("").map(() => Array(3).fill("")));
    setCurrentPlayer("X");

  };
  const resetCounter=()=>{
    setWinnerCount({ X: 0, O: 0 });
  }
  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== "") return;

    const newBoard = board.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? currentPlayer : c))
    );
    setBoard(newBoard); 
    const winner = checkWinner(newBoard)
    if (winner === "X" || winner === "O") {
      // Dynamically update winner count
      setWinnerCount(prev => ({ ...prev, [winner]: prev[winner] + 1 }));

      setTimeout(() => {
        alert(`Player ${winner} Wins!`);
        resetGame();
      }, 500);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return { board, currentPlayer, handleCellClick, resetGame,winnerCount,resetCounter};
};