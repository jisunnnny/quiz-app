import { useState } from "react";
import { useMount } from "react-use";

import { useRecoilValue } from "recoil";
import { count, totalScore } from "states/quiz";
import { VictoryPie } from "victory";
import CustomSlice from "./CustomSlice";

import { PieChart, PieChartText, ResultPageLayout, ResultTimeText } from "./result.style";

const Result = () => {
  const score = useRecoilValue(totalScore);
  const time = useRecoilValue(count);
  const chartScore = Number(score.correct);
  const [data, SetData] = useState([{ y: 10, background: true }, { y: 0 }]);

  const dataUpdate = () => {
    SetData([{ y: 10 - chartScore, background: true }, { y: chartScore }]);
  };

  useMount(() => {
    setTimeout(dataUpdate, 1000);
  });

  return (
    <ResultPageLayout>
      <PieChart>
        <VictoryPie
          data={data}
          cornerRadius={50}
          startAngle={-135}
          endAngle={135}
          labels={() => null}
          innerRadius={120}
          dataComponent={<CustomSlice />}
          animate={{ duration: 1000, easing: "bounce" }}
        />
        <PieChartText>
          <strong>{score.correct}/10</strong>
        </PieChartText>
      </PieChart>
      <ResultTimeText>Run-time: {time}sec</ResultTimeText>
    </ResultPageLayout>
  );
};

export default Result;
