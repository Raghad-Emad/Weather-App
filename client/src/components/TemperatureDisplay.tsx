import "./temperaturedisplay.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const TemperatureDisplay: React.FC = () => {
  const { temperature } = useSelector((state: RootState) => state.weather);

  return (
    <div>
      <p className="temperature">{temperature}°</p>
    </div>
  );
};

export default TemperatureDisplay;
