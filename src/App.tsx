// import './App.css'
// import Box from './components/Box.js'

// function App() {
//   return (
//       <div className='bg-amber-800'>
//        <Box/>
//       </div>
//   )
// }

// export default App
'use client';

import GameBoard from './components/GameBoard';
import { useTicTacToe } from './hooks/useTicTacToe';

export default function App() {
  const { board, currentPlayer, handleCellClick, resetGame ,winnerCount,resetCounter} = useTicTacToe();

  return (
    <div className="flex flex-col justify-evenly items-center h-svh">
      <h1 className="text-5xl text-white font-bold mb-4">Tic-Tac-Toe</h1>
      <p className="text-black mb-2">Current Player: {currentPlayer}</p>
      <div className='flex flex-row justify-center items-center gap-2'>     
         <p className="text-black mb-2 text-2xl border-2">Player X Wins: {winnerCount.X} times.</p>
         <p className="text-black mb-2 text-2xl border-2">Player O Wins: {winnerCount.O} times</p>
      </div>
      <GameBoard board={board} onCellClick={handleCellClick} />
      <button onClick={() => {
    resetGame();
    resetCounter();
   }}className="mt-4 px-4 py-2 bg-white rounded">
        Reset Game
      </button>
    </div>
  );
}
