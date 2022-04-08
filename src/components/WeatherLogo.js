import {
  BsFillSunFill,
  BsCloudsFill,
  BsSnow,
  BsCloudDrizzleFill,
  BsFillMoonFill,
  BsCloudSunFill,
  BsCloudMoonFill,
  BsCloudRainFill,
  BsCloudRainHeavyFill,
  BsFillCloudFogFill,
  BsQuestionLg,
} from "react-icons/bs";

const icon = (params, size) => {
  switch (params) {
    case "01d":
      return <BsFillSunFill size={size} color="rgb(255, 196, 0)" />;
    case "01n":
      return <BsFillMoonFill size={size} />;
    case "02d":
      return <BsCloudSunFill size={size} />;
    case "02n":
      return <BsCloudMoonFill size={size} />;
    case "03d":
      return <BsCloudsFill size={size} />;
    case "03n":
      return <BsCloudsFill size={size} />;
    case "04d":
      return <BsCloudsFill size={size} />;
    case "04n":
      return <BsCloudsFill size={size} />;
    case "09d":
      return <BsCloudDrizzleFill size={size} />;
    case "09n":
      return <BsCloudDrizzleFill size={size} />;
    case "10d":
      return <BsCloudRainFill size={size} />;
    case "10n":
      return <BsCloudRainFill size={size} />;
    case "011d":
      return <BsCloudRainHeavyFill size={size} />;
    case "011n":
      return <BsCloudRainHeavyFill size={size} />;
    case "13d":
      return <BsSnow size={size} />;
    case "13n":
      return <BsSnow size={size} />;
    case "50d":
      return <BsFillCloudFogFill size={size} />;
    case "50n":
      return <BsFillCloudFogFill size={size} />;
    default:
      return <BsQuestionLg size={size} />;
  }
};

export default icon;
