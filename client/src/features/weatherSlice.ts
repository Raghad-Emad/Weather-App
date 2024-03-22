import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  temperature: number;
  summary: string;
  highTemp: number;
  lowTemp: number;
  forecastText: string;
  currentDate: string;
  cityName: string;
  isCelsius: boolean;
  dailyForecast: { day: string; temperature: number }[];
  hourlyForecast: { time: string; temperature: number }[];
}

const initialState: WeatherState = {
  temperature: 0,
  summary: '',
  highTemp: 0,
  lowTemp: 0,
  forecastText: '',
  currentDate: '',
  cityName: '',
  isCelsius: true, // Default to Celsius
  dailyForecast: [],
  hourlyForecast: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<{ temperature: number; summary: string; cityName: string }>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    toggleTemperatureUnit: (state) => {
      state.temperature = state.isCelsius ? (state.temperature * 9) / 5 + 32 : ((state.temperature - 32) * 5) / 9;
      state.highTemp = state.isCelsius ? (state.highTemp * 9) / 5 + 32 : ((state.highTemp - 32) * 5) / 9;
      state.lowTemp = state.isCelsius ? (state.lowTemp * 9) / 5 + 32 : ((state.lowTemp - 32) * 5) / 9;
      state.isCelsius = !state.isCelsius;
    },
  },
});

export const { setWeatherData, toggleTemperatureUnit } = weatherSlice.actions;

export default weatherSlice.reducer;
