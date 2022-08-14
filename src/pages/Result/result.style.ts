import styled from "styled-components";

const ResultPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

const PieChart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PieChartText = styled.span`
  position: absolute;
  color: colors.$TEXT_SECONDARY;
  text-align: center;

  strong {
    font-size: 30px;
    font-weight: 900;
    color: colors.$TEXT_PRIMARY;
  }
`;

const ResultTimeText = styled.span`
  text-align: center;
`;

export { PieChart, PieChartText, ResultPageLayout, ResultTimeText };
