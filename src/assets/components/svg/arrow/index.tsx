import { ArrowSvg } from "./Arrow.styled";

type ArrowProps = {
  size: number;
  angle: number;
  color: string;
};

const Arrow = ({ size, angle, color }: ArrowProps) => {
  return (
    <ArrowSvg
      xmlns="http://www.w3.org/2000/svg"
      id="b385ca18-4b85-46d4-bb4b-571c73a19812"
      data-name="b922a425-e5e0-4ef1-881c-5748460fd139"
      viewBox="0 0 30.125 18.1738"
      size={size}
      $angle={angle}
      color={color}
    >
      <title>arrow-icon-size3</title>
      <path
        d="M29.75,9.3948,21.5281,1.1735a.8479.8479,0,0,0-.601-.261L20.9124.9119a.8526.8526,0,0,0-.5956.2409.8642.8642,0,0,0-.0027,1.23l6.7618,6.7611H.7316a.8566.8566,0,1,0,0,1.7131H27.0759l-6.7591,6.7591a.8576.8576,0,0,0-.0214,1.2113.8462.8462,0,0,0,.61.2583.8949.8949,0,0,0,.621-.2556l8.2233-8.224A.8587.8587,0,0,0,29.75,9.3948Z"
        transform="translate(0.125 -0.9119)"
      ></path>
    </ArrowSvg>
  );
};

export default Arrow;
