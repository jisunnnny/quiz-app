import styled from "styled-components";

const ResultPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;

  h1 {
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
  }
`;

const PieChart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
`;

const PieChartText = styled.span`
  position: absolute;
  text-align: center;

  strong {
    font-size: 30px;
    font-weight: 900;
  }
`;

const ResultTimeText = styled.span`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray03};
`;

const QuizRetryButton = styled.button`
  width: 100px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.blue03};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border-radius: 5px;
`;

export { PieChart, PieChartText, ResultPageLayout, ResultTimeText, QuizRetryButton };
