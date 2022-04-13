import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initial = [];

const reducers = (state = initial, action) => {
  if (action.type === "GET_LAT") {
    return { ...state, lat: action.payload };
  }
  if (action.type === "GET_LON") {
    return { ...state, lon: action.payload };
  }
  if (action.type === "FETCH_DATA") {
    return { ...state, current: action.payload };
  }
  if (action.type === "FETCH_DATA_1") {
    return { ...state, sevendays: action.payload };
  }
  return state;
};

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
