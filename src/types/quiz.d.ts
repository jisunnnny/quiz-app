export interface IQuizItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selectedAnswer?: string;
}

export interface IQuizAPIRes {
  response_code: number;
  results: IQuizItem[];
}
