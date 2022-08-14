import { IQuizAPIRes } from "types/quiz.d";
import axios from "axios";

const QUIZ_BASE_URL = "https://opentdb.com/api.php";

interface Params {
  category: string;
  difficulty: string;
}

export const getQuizListApi = (params: Params) =>
  axios.get<IQuizAPIRes>(QUIZ_BASE_URL, {
    params: {
      ...params,
      amount: 10,
      type: "multiple",
    },
  });
