import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const CurrentSummary: React.FC = () => {
  const summary = useSelector((state: RootState) => state.weather.summary);

  return (
    <p>Current summary: {summary}</p>
  );
};

export default CurrentSummary;
