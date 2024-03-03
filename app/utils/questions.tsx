//Exporting the question set interface
export interface QuestionSet {
    question: string;
    options: string[];
    correctAnswer: string,
  }

  //Manually added questions which will be asked to the user
  const questionSets: QuestionSet[] = [
    {
      question: "Where is the creator of the quiz from?",
      options: ["Cape Town", "New York", "London", "Madrid"],
      correctAnswer: "Cape Town",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1950", "1939"],
      correctAnswer: "1945",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Iron", "Silver"],
      correctAnswer: "Oxygen",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      correctAnswer: "Yen",
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the world's largest desert not covered in ice?",
      options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
      correctAnswer: "Antarctica",
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Virginia Woolf"],
      correctAnswer: "F. Scott Fitzgerald",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "Which country is known as the 'Land of the Midnight Sun'?",
      options: ["Norway", "Sweden", "Canada", "Russia"],
      correctAnswer: "Norway",
    },
  ];

  //Exporting the list of questions
  export const getQuestions = (): QuestionSet[] => {
    const questions = questionSets;
    return questions;
  };
  