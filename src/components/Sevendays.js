import React from "react";
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

function Sevendays({ forecast }) {
  const icon = (params) => {
    switch (params) {
      case "01d":
        return <BsFillSunFill size={50} color="yellow" />;
      case "01n":
        return <BsFillMoonFill size={50} />;
      case "02d":
        return <BsCloudSunFill size={50} />;
      case "02n":
        return <BsCloudMoonFill size={50} />;
      case "03d":
        return <BsCloudsFill size={50} />;
      case "03n":
        return <BsCloudsFill size={50} />;
      case "04d":
        return <BsCloudsFill size={50} />;
      case "04n":
        return <BsCloudsFill size={50} />;
      case "09d":
        return <BsCloudDrizzleFill size={50} />;
      case "09n":
        return <BsCloudDrizzleFill size={50} />;
      case "10d":
        return <BsCloudRainFill size={50} />;
      case "10n":
        return <BsCloudRainFill size={50} />;
      case "011d":
        return <BsCloudRainHeavyFill size={50} />;
      case "011n":
        return <BsCloudRainHeavyFill size={50} />;
      case "13d":
        return <BsSnow size={50} />;
      case "13n":
        return <BsSnow size={50} />;
      case "50d":
        return <BsFillCloudFogFill size={50} />;
      case "50n":
        return <BsFillCloudFogFill size={50} />;
      default:
        return <BsQuestionLg size={50} />;
    }
  };

  let daily = [];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 1; i < 8; i++) {
    daily.push(forecast[i]);
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.150)",
        padding: "10px",
        borderRadius: "20px",
        width: "65%",
        margin: "auto",
      }}
    >
      {!daily.length > 0 ? (
        <h1>wait</h1>
      ) : (
        daily.map((f) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "30px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p>{icon(f && f.weather[0].icon)}</p>
            </div>
            <>
              <p>{`${days[new Date(f && f.dt * 1000).getDay()]}`}</p>
            </>

            <>
              <p>
                {f && f.temp.min.toFixed(0)}
                <sup>o</sup> C | {f && f.temp.max.toFixed(0)}
                <sup>o</sup> C
              </p>
            </>
          </div>
        ))
      )}
    </div>
  );
}

export default Sevendays;
