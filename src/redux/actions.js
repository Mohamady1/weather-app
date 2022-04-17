//to dispatch current data
export const current_data = (query, api) => async (dispatch) => {
  try {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`
    );
    const res = await req.json();
    dispatch({
      type: "FETCH_DATA",
      payload: res,
    });
    dispatch({
      type: "GET_LAT",
      payload: res.coord.lat,
    });
    dispatch({
      type: "GET_LON",
      payload: res.coord.lon,
    });
  } catch {
    console.log("try again with correct values");
  }
};

//to dispatch forecast seven days data
export const seven_days_data = (lat, lon, api) => async (dispatch) => {
  if (lat > 0 || lat < 0) {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat && lat}&lon=${
        lon && lon
      }&exclude=current,minutely,hourly,alerts&units=metric&appid=${api}`
    );
    const res = await req.json();
    dispatch({
      type: "FETCH_DATA_1",
      payload: res.daily,
    });
  }
};
