'use client';

import React from 'react';


export default function Box() {
  const [board,setBoard]=React.useState(new Array(3).fill("").map(()=> new Array(3).fill("")));
  const [currentPlayer,setCurrentPlayer]=React.useState("X")
  const handleCellValue=(rowIndex:number,colIndex:number)=>{
    const newBoard = [...board];
    if(newBoard[rowIndex][colIndex]!=="") return;
    newBoard[rowIndex][colIndex]=currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer((currentPlayer === "X")?"O":"X")
  }
  interface WinningPatterns {
    [key: string]: string[];
  }
  const winningPattren:WinningPatterns={
    R1: [board[0][0], board[0][1], board[0][2]],
    R2: [board[1][0], board[1][1], board[1][2]],    
    R3: [board[2][0], board[2][1], board[2][2]],
    C1: [board[0][0], board[1][0], board[2][0]],
    C2: [board[0][1], board[1][1], board[2][1]],
    C3: [board[0][2], board[1][2], board[2][2]],
    D1: [board[0][0], board[1][1], board[2][2]],    
    D2: [board[0][2], board[1][1], board[2][0]]
  }
  const checkWninner=()=>{
    for (const key in winningPattren) {
      const line = winningPattren[key];
    
      if (line.every(val => val === "X")) {
        console.log("Player X wins!");
        alert("Player X Wins");
      }
    
      if (line.every(val => val === "O")) {
        console.log("Player O wins!");
        alert("Player O Wins");
      }
    }
  }
return (
  <div className='flex flex-col justify-evenly items-center h-svh'>  
    <strong className='text-8xl'><h1 className='text-white'>Tic-Tac Game</h1></strong>
    <div>
<div className='grid grid-cols-3 w-fit'>
{board.map((row, rIndex) => (
  <div key={rIndex}>
    {row.map((cell, cIndex) => (
      <div key={cIndex} className='flex justify-center items-center w-28 h-28 border-2' onClick={()=>{handleCellValue(rIndex,cIndex);
        checkWninner();
      }}>
        {cell}
      </div>
    ))}
  </div>
))}
</div>
  </div></div>

);}