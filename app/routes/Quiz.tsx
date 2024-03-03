//Importing the needed elemts to run the page
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from './Quiz/Question';
import { getQuestions} from '../utils/questions';
import { checkUserAnswer, UserAnswer  } from '../utils/quizUtil';
import './Styles/tailwindimporter.css';

const Quiz: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Getting all the needed values

  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('name') || '';
  const selectedAvatar = searchParams.get('avatar') || '';
  const selectedAccessoryIndex = parseInt(searchParams.get('accessoryIndex') || '0', 10);

  const questions = getQuestions();
  const selectedQuestion = questions[selectedAccessoryIndex]

  const [currentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);

  //Setting the start time
  useEffect(() => {
    setStartTime(null);
    setStartTime(new Date().getTime())
  }, [location.pathname]);

  
  const handleSelectOption = (selectedOption: string) => {
    
    //Getting more values to determine the answer and the score
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = { question: selectedQuestion.question, selectedOption };
    setUserAnswers(newAnswers);

    const endTime = new Date().getTime();
    const timeTakenInSeconds = (endTime - (startTime ?? endTime)) / 1000;

    const score = checkUserAnswer(newAnswers[currentQuestion], selectedQuestion, timeTakenInSeconds);

    let finalScore = score;

    navigate(`/results?name=${userName}&avatar=${selectedAvatar}&finalScore=${finalScore}`)
  };

  return (
    <div className="bg-blue-500 flex flex-col items-center justify-center h-screen w-screen ">
      <div className="bg-cyan-300 flex flex-col items-center justify-center h-[550px] w-[620px] rounded-lg ">
        <img
          src={selectedAvatar}
          alt="User Avatar"
          className="rounded-full h-32 w-32 mb-2"
        />
        <h1 className="mb-4">Quiz Time, {userName}!</h1>
        <Question
          question={selectedQuestion.question}
          options={selectedQuestion.options}
          onSelectOption={handleSelectOption}
        />
      </div>
    </div>
  );
};

export default Quiz;