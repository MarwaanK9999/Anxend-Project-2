//THe component which will display the score
import React from 'react';

//Exporting the interface of the score display
export interface ScoreDisplayProps {
  scores: number[];
  finalScore: number;
}

//Displaying the score
const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ finalScore }) => {
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full text-lg">
        {finalScore}
    </div>
  );
};

export default ScoreDisplay;