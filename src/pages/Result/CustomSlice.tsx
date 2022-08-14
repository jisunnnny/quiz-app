import { Slice } from "victory";

const CustomSlice = (props: any) => {
  const { datum } = props;

  const endPoint = 270 * (datum.y / 10) - 135;

  return (
    <Slice
      {...props}
      cornerRadius={50}
      sliceStartAngle={-135}
      sliceEndAngle={datum.background ? 135 : endPoint}
      style={{ fill: datum.background ? "#dedede" : "#4263eb" }}
    />
  );
};

export default CustomSlice;
