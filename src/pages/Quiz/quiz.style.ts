import styled from "styled-components";

const QuizPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

const QuizText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray03};
  text-align: end;
  font-size: 14px;
  font-style: italic;
  letter-spacing: -1px;
  p {
    margin-bottom: 10px;
  }
`;

export { QuizPageLayout, QuizText };
