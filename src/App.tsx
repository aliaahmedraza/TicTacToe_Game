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
  const { board, currentPlayer, handleCellClick, resetGame } = useTicTacToe();

  return (
    <div className="flex flex-col justify-evenly items-center h-svh">
      <h1 className="text-5xl text-white font-bold mb-4">Tic-Tac-Toe</h1>
      <p className="text-black mb-2">Current Player: {currentPlayer}</p>
      <GameBoard board={board} onCellClick={handleCellClick} />
      <button onClick={resetGame} className="mt-4 px-4 py-2 bg-white rounded">
        Reset Game
      </button>
    </div>
  );
}
