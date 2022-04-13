import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { current_data } from "./redux/actions";
import { seven_days_data } from "./redux/actions";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Woresult from "./components/Woresult";

function App() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  //country name
  const [query, setQuery] = React.useState("");

  const API_Key = "4a29cf92778614560202a2847757e184";

  const getData = async () => {
    dispatch(current_data(query, API_Key));
  };

  useEffect(() => {
    dispatch(seven_days_data(state.lat, state.lon, API_Key));
  }, [dispatch, state.lat, state.lon]);

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
        {state && state.length === 0 ? (
          <Woresult />
        ) : state && state.current.message === "city not found" ? (
          <Error />
        ) : (
          <Result
            forecast={state.sevendays ? state.sevendays : ""}
            data={state.current ? state.current : ""}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
