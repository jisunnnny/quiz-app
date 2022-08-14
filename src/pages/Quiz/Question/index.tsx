import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { totalScore } from "states/quiz";
import { IQuizItem } from "types/quiz";

import {
  QuestionPageLayout,
  QuestionTitle,
  AnswerList,
  AnswerBox,
  AnswerTitleBox,
  AnswerTitleText,
  AnswerSubmitText,
  AnswerItem,
  ButtonBox,
  AnswerButton,
  SubmitButton,
  NextButton,
} from "./question.style";

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

interface Props {
  quiz: IQuizItem;
  handleNextQuestion: () => void;
}

const Question = ({ quiz, handleNextQuestion }: Props) => {
  const { question, correctAnswer, incorrectAnswers } = quiz;
  const [answerList, setAnswerList] = useState<string[]>();
  const [selected, setSelected] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<string>("");
  const setTotalScore = useSetRecoilState(totalScore);

  useEffect(() => {
    setAnswerList(shuffle([correctAnswer, ...incorrectAnswers]));
  }, [correctAnswer, incorrectAnswers]);

  const handleAnswerItemClick = (e: any) => {
    setSelected(e);
    setIsCorrect("");
  };

  const handleSubmitButtonClick = () => {
    setIsCorrect(selected === correctAnswer ? "true" : "false");
  };

  const handleNextButtonClick = () => {
    // 사용자가 선택한 정답 데이터 저장

    if (isCorrect === "true") {
      setTotalScore((prev) => {
        return { ...prev, correct: prev.correct + 1 };
      });
    } else {
      setTotalScore((prev) => {
        return { ...prev, incorrect: prev.incorrect + 1 };
      });
    }

    setSelected("");
    setIsCorrect("");
    handleNextQuestion();
  };

  return (
    <QuestionPageLayout>
      <QuestionTitle>Q. {question}</QuestionTitle>
      <AnswerBox>
        <AnswerTitleBox>
          <AnswerTitleText>MyAnswer.</AnswerTitleText>
          {isCorrect !== "" && (
            <AnswerSubmitText isCorrect={isCorrect}>{isCorrect === "true" ? "🟢" : "❌"}</AnswerSubmitText>
          )}
        </AnswerTitleBox>
        <AnswerList>
          {answerList?.map((item) => {
            return (
              <AnswerItem key={item}>
                <AnswerButton
                  type="button"
                  data-answer={item}
                  isClicked={selected === item}
                  isCorrect={isCorrect}
                  onClick={() => handleAnswerItemClick(item)}
                >
                  {item}
                </AnswerButton>
              </AnswerItem>
            );
          })}
        </AnswerList>
      </AnswerBox>
      <ButtonBox>
        {selected !== "" && (
          <SubmitButton type="button" onClick={handleSubmitButtonClick}>
            Submit
          </SubmitButton>
        )}
        {isCorrect !== "" && (
          <NextButton type="button" onClick={handleNextButtonClick}>
            Next
          </NextButton>
        )}
      </ButtonBox>
    </QuestionPageLayout>
  );
};

export default Question;
