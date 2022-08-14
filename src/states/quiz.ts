import { atom } from "recoil";
import { IQuizItem } from "types/quiz";

interface IToTalScore {
  correct: number;
  incorrect: number;
}

const difficultyState = atom<string>({
  key: "#difficultyState",
  default: "easy",
});

const categoryState = atom<string>({
  key: "#categoryState",
  default: "27",
});

const totalScore = atom<IToTalScore>({
  key: "#totalScore",
  default: { correct: 0, incorrect: 0 },
});

const count = atom<number>({
  key: "#count",
  default: 0,
});

const quizItemList = atom<IQuizItem[]>({
  key: "#quizItemList",
  default: [],
});

export { difficultyState, categoryState, totalScore, count, quizItemList };
