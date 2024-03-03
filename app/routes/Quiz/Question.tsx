//Imports needed in the component
import React , { useState, useEffect } from 'react';

//Interface of the selected question
interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (selectedOption: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onSelectOption }) => {
  const [timer, setTimer] = useState(10);

  //Resets the timer
  useEffect(() => {
    setTimer(10);
  }, [question]);

  //Sets the timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);


  return (
    <div className="w-[620px]">
      <h2>{question}</h2>
      <div>
        {options.map((option) => (
          <button className="text-white bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4" 
            key={option} onClick={() => onSelectOption(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4 w-[620px]">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-500 text-white font-bold">
                Time Left
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-500">
                {timer}s
              </span>
            </div>
          </div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex flex-col w-full">
              <div className="flex h-2 mb-4 overflow-hidden text-xs bg-teal-500">
                <div
                  style={{ width: `${(timer / 10) * 100}%` }}
                  className="flex flex-col whitespace-nowrap text-center text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
