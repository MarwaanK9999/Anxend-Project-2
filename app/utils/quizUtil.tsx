//Imports needed
import { QuestionSet } from './questions';

//Interface of the users answer
export interface UserAnswer {
  question: string;
  selectedOption: string;
}

//Calculation of the score after the user answer, which is time based and calculated out of 100
export const checkUserAnswer = (userAnswer: UserAnswer, question: QuestionSet, timeTakenInSeconds: number): number => {
  let score = 0;

  if (question && userAnswer && question.correctAnswer === userAnswer.selectedOption) {
    score = 100 - (10 * timeTakenInSeconds);
    if (score < 0) {
      score = 0; // Ensures that the score that is shown is not negative
    }
  }

  return score;
};
  