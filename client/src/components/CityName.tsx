
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const CityName: React.FC = () => {
  const cityName = useSelector((state: RootState) => state.weather.cityName);

  return (
    <p>City: {cityName}</p>
  );
};

export default CityName;
