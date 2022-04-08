import React from "react";
import Flag from "./Flag";
import icon from "./WeatherLogo";
import Sevendays from "./Sevendays";

function Result({ data, forecast }) {
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
        {icon(data.weather[0].icon, 140)}
        <p
          className={data.main.temp.toFixed(0) > 23 && "red"}
          style={{ fontSize: "20px" }}
        >
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
        <Sevendays forecast={forecast} />
      </div>
    </div>
  );
}

export default Result;
