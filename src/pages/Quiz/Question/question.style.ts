import styled, { css } from "styled-components";

interface Props {
  isClicked?: boolean;
  isCorrect?: string;
}

const QuestionPageLayout = styled.div`
  width: 100%;
`;

const QuestionTitle = styled.h1`
  margin-bottom: 30px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  line-height: 20px;
`;

const AnswerBox = styled.div`
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 5px;
`;

const AnswerTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 22px;
  margin-bottom: 10px;
`;

const AnswerTitleText = styled.span`
  font-weight: 600;
`;

const AnswerSubmitText = styled.span<Props>`
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;

  ${(props: Props) =>
    props.isCorrect === "true" &&
    css`
      background: ${({ theme }) => theme.colors.green01};
      color: ${({ theme }) => theme.colors.green02};
      font-weight: 600;
    `}

  ${(props: Props) =>
    props.isCorrect === "false" &&
    css`
      background: ${({ theme }) => theme.colors.red01};
      color: ${({ theme }) => theme.colors.red02};
      font-weight: 600;
    `}
`;

const AnswerList = styled.ul`
  line-height: 40px;
  font-size: 14px;
`;

const AnswerItem = styled.li`
  width: 260px;
`;

const AnswerButton = styled.button<Props>`
  width: 100%;
  padding: 10px;
  text-align: start;
  border-radius: 5px;

  ${(props: Props) =>
    props.isCorrect === "true" &&
    props.isClicked &&
    css`
      background: ${({ theme }) => theme.colors.green01};
      color: ${({ theme }) => theme.colors.green02};
      font-weight: 600;
    `}

  ${(props: Props) =>
    props.isCorrect === "false" &&
    props.isClicked &&
    css`
      background: ${({ theme }) => theme.colors.red01};
      color: ${({ theme }) => theme.colors.red02};
      font-weight: 600;
    `}

    ${(props: Props) =>
    props.isCorrect === "" &&
    props.isClicked &&
    css`
      background: ${({ theme }) => theme.colors.blue01};
      color: ${({ theme }) => theme.colors.blue03};
      font-weight: 600;
    `}
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  width: 80px;
  margin-right: 10px;
  padding: 10px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;

const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray03};
`;

const NextButton = styled(Button)`
  background: ${({ theme }) => theme.colors.blue03};
`;

export {
  QuestionPageLayout,
  QuestionTitle,
  AnswerBox,
  AnswerTitleBox,
  AnswerTitleText,
  AnswerSubmitText,
  AnswerList,
  AnswerItem,
  ButtonBox,
  AnswerButton,
  SubmitButton,
  NextButton,
};
