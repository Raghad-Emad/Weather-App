import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const CurrentDate: React.FC = () => {
  const { currentDate } = useSelector((state: RootState) => state.weather);

  return (
    <p>Today's date: {currentDate}</p>
  );
};

export default CurrentDate;
