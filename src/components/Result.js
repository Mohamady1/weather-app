import React from "react";
import Flag from "./Flag";
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
import Sevendays from "./Sevendays";

function Result({ data, forecast }) {
  const icon = () => {
    switch (data.weather[0].icon) {
      case "01d":
        return <BsFillSunFill size={140} color="yellow" />;
      case "01n":
        return <BsFillMoonFill size={140} />;
      case "02d":
        return <BsCloudSunFill size={140} />;
      case "02n":
        return <BsCloudMoonFill size={140} />;
      case "03d":
        return <BsCloudsFill size={140} />;
      case "03n":
        return <BsCloudsFill size={140} />;
      case "04d":
        return <BsCloudsFill size={140} />;
      case "04n":
        return <BsCloudsFill size={140} />;
      case "09d":
        return <BsCloudDrizzleFill size={140} />;
      case "09n":
        return <BsCloudDrizzleFill size={140} />;
      case "10d":
        return <BsCloudRainFill size={140} />;
      case "10n":
        return <BsCloudRainFill size={140} />;
      case "011d":
        return <BsCloudRainHeavyFill size={140} />;
      case "011n":
        return <BsCloudRainHeavyFill size={140} />;
      case "13d":
        return <BsSnow size={140} />;
      case "13n":
        return <BsSnow size={140} />;
      case "50d":
        return <BsFillCloudFogFill size={140} />;
      case "50n":
        return <BsFillCloudFogFill size={140} />;
      default:
        return <BsQuestionLg size={140} />;
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "46px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <h1>
            {data.name}, {data.sys.country}
          </h1>
          <Flag flag={data.sys.country} />
        </div>
        {icon()}
        <p>
          {data.main.temp.toFixed(0)}
          <sup>o</sup> C
        </p>
        <h1>{data.weather[0].description}</h1>
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div className="buttons">
            <p>Feels Like</p>
            <p>
              {data.main.feels_like.toFixed(0)}
              <sup>o</sup> C
            </p>
          </div>
          <div className="buttons">
            <p>Wind Speed</p>
            <p>{data.wind.speed} km/h</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <Sevendays icon={icon} forecast={forecast} />
      </div>
    </div>
  );
}

export default Result;
