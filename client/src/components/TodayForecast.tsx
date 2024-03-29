import "./todayforecast.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const TodayForecast: React.FC = () => {
  const summary = useSelector((state: RootState) => state.weather.summary);

  return <p className="todayforecast"> {summary} throughout the day</p>;
};

export default TodayForecast;
