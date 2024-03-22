import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const HourlyForecast: React.FC = () => {
  const { hourlyForecast } = useSelector((state: RootState) => state.weather);

  return (
    <div>
      <h2>Hourly Forecast:</h2>
      <ul>
        {hourlyForecast.slice(0, 24).map((hour, index) => (
          <li key={index}>{hour.time}: {hour.temperature}°</li>
        ))}
      </ul>
      
    </div>
  );
};

export default HourlyForecast;
