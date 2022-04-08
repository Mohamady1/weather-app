import React from "react";
import icon from "./WeatherLogo";

function Sevendays({ forecast }) {
  //make array to store Seven days only from API not Eight days
  let daily = [];
  let id = 0;

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
            key={++id}
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
              <p>{icon(f && f.weather[0].icon, 50)}</p>
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
