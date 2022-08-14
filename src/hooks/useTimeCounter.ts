import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { count } from "states/quiz";

const useTimeCount = () => {
  const [countTime, setCountTime] = useRecoilState(count);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountTime((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [setCountTime]);

  return { countTime };
};

export default useTimeCount;
