import React from 'react';

interface CellProps {
  value: string;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div
      className="flex justify-center items-center w-28 h-28 border-2 text-4xl cursor-pointer"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;