import { atom } from "recoil";

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

export { difficultyState, categoryState, totalScore, count };
