import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const HighLowTemperature: React.FC = () => {
  const { highTemp, lowTemp } = useSelector((state: RootState) => state.weather);

  return (
    <div>
      <p>Today's high: {highTemp}°</p>
      <p>Today's low: {lowTemp}°</p>
    </div>
  );
};

export default HighLowTemperature;
