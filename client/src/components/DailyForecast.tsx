import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const DailyForecast: React.FC = () => {
  const { dailyForecast } = useSelector((state: RootState) => state.weather);

   // Ensure dailyForecast is defined and has elements
   if (!dailyForecast || dailyForecast.length === 0) {
    return null; // Return null if dailyForecast is not available
  }

  const getWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  console.log(dailyForecast)

  return (
    <div>
      <h2>Daily Forecast:</h2>
      <ul>
        {dailyForecast.slice(0, 14).map((day, index) => (
          <li key={index}>{getWeekday(day.day)}: {day.temperature}°</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyForecast;
