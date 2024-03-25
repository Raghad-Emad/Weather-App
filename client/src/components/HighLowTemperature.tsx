import "./highlowtemprature.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const HighLowTemperature: React.FC = () => {
  const { highTemp, lowTemp } = useSelector(
    (state: RootState) => state.weather
  );

  const integerHighTemp = Math.trunc(highTemp);
  const integerLowTemp = Math.trunc(lowTemp);

  return (
    <div>
      <p className="highlowtemp">
        {integerHighTemp}° / {integerLowTemp}°
      </p>
    </div>
  );
};

export default HighLowTemperature;
