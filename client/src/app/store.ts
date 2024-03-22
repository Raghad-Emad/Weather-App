import { configureStore } from '@reduxjs/toolkit';
import weatherReducer, { setWeatherData } from '../features/weatherSlice';
import { fetchWeatherData } from '../api';


const location = 'New York'; 

fetchWeatherData(location).then((data) => {
  store.dispatch(setWeatherData(data)); // Use setWeatherData action creator
});

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;