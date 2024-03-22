import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from './api';
import { setWeatherData } from './features/weatherSlice';
import TemperatureDisplay from './components/TemperatureDisplay';
import HighLowTemperature from './components/HighLowTemperature';
import TextSummary from './components/TextSummary';
import CurrentDate from './components/CurrentDate';
import TemperatureToggle from './components/TemperatureToggle';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import CityName from './components/CityName';
import TodayForecast from './components/TodayForecast';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData('New Cairo');
        dispatch(setWeatherData(data)); // Dispatch action to update Redux store
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <CityName />
      <CurrentDate />
      <TextSummary />
      <HourlyForecast />
      <DailyForecast />
      <TemperatureToggle />
      <TemperatureDisplay />
      <HighLowTemperature />
      <TodayForecast/>
    </div>
  );
};

export default App;
