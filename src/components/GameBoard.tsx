import Cell from './Cell';

interface GameBoardProps {
  board: string[][];
  onCellClick: (row: number, col: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 w-fit">
      {board.map((row, rIndex) =>
        row.map((cell, cIndex) => (
          <Cell
            key={`${rIndex}-${cIndex}`}
            value={cell}
            onClick={() => onCellClick(rIndex, cIndex)}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;