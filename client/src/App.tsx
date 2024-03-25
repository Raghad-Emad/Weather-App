import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";

import { fetchWeatherData } from "./api";
import { setWeatherData } from "./features/weatherSlice";

import TemperatureDisplay from "./components/TemperatureDisplay";
import HighLowTemperature from "./components/HighLowTemperature";
import TextSummary from "./components/TextSummary";
import CurrentDate from "./components/CurrentDate";
import TemperatureToggle from "./components/TemperatureToggle";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import CityName from "./components/CityName";
import TodayForecast from "./components/TodayForecast";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/work-sans";
import WeatherIcon from "./components/WeatherIcon";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData("New Cairo");

        // Ensure that the data includes the 'isCelsius' property
        if (!("isCelsius" in data)) {
          throw new Error("Missing isCelsius property in weather data");
        }

        dispatch(setWeatherData(data)); // Dispatch action to update Redux store
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App bg-image">
      <div className="container">
        <p className="InstaWeather-Text temp-align">INSTAWEATHER</p>
        <TemperatureToggle />
        <CityName />
        <CurrentDate />
        <WeatherIcon
          temperature={weatherData.temperature}
          iconUrl={weatherData.weatherIconUrl}
        />
        <TemperatureDisplay />
        <HighLowTemperature />
        <TextSummary />
        <TodayForecast />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </div>
  );
};

export default App;
