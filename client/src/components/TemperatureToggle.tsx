import "../App.css";
import "./tempraturetoggle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTemperatureUnit } from "../features/weatherSlice";
import { RootState } from "../app/store";

const TemperatureToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { isCelsius } = useSelector((state: RootState) => state.weather);

  const handleToggle = (unit: string) => {
    if ((unit === "C" && !isCelsius) || (unit === "F" && isCelsius)) {
      dispatch(toggleTemperatureUnit());
    }
  };

  return (
    <div className="flex-parent">
      <div className="temprature-toggle temp-align">
        {/* <button
        onClick={() => handleToggle('C')}
        disabled={isCelsius}
        className={isCelsius ? '' : 'selected'} 
      >
        C
      </button>
      <button
        onClick={() => handleToggle('F')}
        disabled={!isCelsius}
        className={isCelsius ? 'selected' : ''} 
      >
        F
      </button> */}
        <button
          onClick={() => handleToggle("C")}
          disabled={isCelsius}
          className={isCelsius ? "" : "selected"}
        >
          C
        </button>
        <button
          onClick={() => handleToggle("F")}
          disabled={!isCelsius}
          className={isCelsius ? "selected" : ""}
        >
          F
        </button>
      </div>
    </div>
  );
};

export default TemperatureToggle;
