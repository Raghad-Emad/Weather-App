import "./hourlyforecast.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const HourlyForecast: React.FC = () => {
  const { hourlyForecast } = useSelector((state: RootState) => state.weather);
  console.log(hourlyForecast);
  return (
    <div className="hourly-forecast">
      <p>Hourly</p>
      <ul>
        {hourlyForecast.map((hour, index) => (
          <li key={index}>
            {hour.time.slice(11, 16)}
            {/* <HourlyForecastIcon iconUrl={hour.iconUrl} /> */}
            <br />
            {hour.temperature}°
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;
