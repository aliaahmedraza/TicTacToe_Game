const checkWinner = (board: string[][]): "X" | "O" | null => {
    const lines = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];
  
    for (const line of lines) {
        if (line.every(cell => cell === "X")){
            console.log(line);
            return "X"
        } 
        if (line.every(cell => cell === "O")) return "O";
    }
  
    return null;
  };
  
  export default checkWinner;