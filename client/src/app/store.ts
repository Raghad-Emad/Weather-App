import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer, { setWeatherData } from "../features/weatherSlice";
import { fetchWeatherData } from "../api";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

// Fetch weather data from the API and dispatch the setWeatherData action
const location = "New York";
fetchWeatherData(location).then((data) => {
  store.dispatch(setWeatherData(data));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
