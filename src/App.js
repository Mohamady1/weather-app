import React, { useState, useEffect } from "react";
import "./App.css";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Woresult from "./components/Woresult";

function App() {
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [query, setQuery] = useState("");

  const API_Key = "4a29cf92778614560202a2847757e184";

  const getData = async () => {
    try {
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_Key}`
      );
      const res = await req.json();
      setData(res);
      setLat(res.coord.lat);
      setLon(res.coord.lon);
    } catch {
      alert("try again with correct values");
    }
  };

  useEffect(() => {
    const getDaily = async () => {
      if (lat > 0) {
        const req = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_Key}`
        );
        const res = await req.json();
        setForecast(res.daily);
      }
    };
    getDaily();
  }, [lat, lon]);

  const search = (e) => {
    if (e.key === "Enter") {
      getData();
      setQuery("");
    }
  };

  return (
    <div className="App">
      <Header search={search} setQuery={setQuery} query={query} />
      <div style={{ margin: "30px 0 30px 0", width: "100%" }}>
        {data.length === 0 ? (
          <Woresult />
        ) : data.message === "city not found" ? (
          <Error />
        ) : (
          <Result forecast={forecast} data={data} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
