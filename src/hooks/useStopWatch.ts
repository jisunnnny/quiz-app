import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { count } from "states/quiz";

const useStopWatch = () => {
  const [time, setTime] = useRecoilState(count);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return clearInterval(timer);
  }, [setTime]);

  return time;
};

export default useStopWatch;
