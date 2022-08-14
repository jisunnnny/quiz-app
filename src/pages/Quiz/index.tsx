import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import camelcaseKeys from "camelcase-keys";
import { getQuizListApi } from "services/quiz";
import { categoryState, difficultyState, quizItemList, totalScore } from "states/quiz";
import { getDifficulty, getCategory } from "./util";
import useTimeCount from "hooks/useTimeCounter";

import Question from "./Question";

import { QuizPageLayout, QuizText } from "./quiz.style";

const Quiz = () => {
  const navigate = useNavigate();
  const category = useRecoilValue(categoryState);
  const difficulty = useRecoilValue(difficultyState);
  const setTotalScore = useSetRecoilState(totalScore);
  const { countTime } = useTimeCount();

  const [quizList, setQuizList] = useRecoilState(quizItemList);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoad] = useState<boolean>(true);
  const [questionNum, setQuestionNum] = useState<number>(0);

  const categoryLabel = getCategory(category);
  const difficultyLabel = getDifficulty(difficulty);

  const getQuizList = () => {
    getQuizListApi({ category, difficulty })
      .then((res) => res.data)
      .then((data) => setQuizList(camelcaseKeys(data.results)))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoad(false);
      });
  };

  useEffect(() => {
    getQuizList();

    setIsError(false);
    setQuestionNum(0);
    setTotalScore({ correct: 0, incorrect: 0 });
  }, [setTotalScore, setQuestionNum, setIsError]);

  const handleNextQuestion = () => {
    setQuestionNum((prev) => prev + 1);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>ERR...</div>;

  if (questionNum + 1 > quizList.length) {
    navigate("/result", { replace: true });
  }

  return (
    <QuizPageLayout>
      <QuizText>
        <p>
          {categoryLabel} & {difficultyLabel}
        </p>
        <p>
          {questionNum + 1} of {quizList.length}
        </p>
      </QuizText>
      <Question quiz={quizList[questionNum]} handleNextQuestion={handleNextQuestion} />
    </QuizPageLayout>
  );
};

export default Quiz;
