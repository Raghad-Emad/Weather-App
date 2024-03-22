import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTemperatureUnit } from '../features/weatherSlice';
import { RootState } from '../app/store';

const TemperatureToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { isCelsius } = useSelector((state: RootState) => state.weather);

  const handleToggle = () => {
    dispatch(toggleTemperatureUnit());
  };

  return (
    <button onClick={handleToggle}>{isCelsius ? 'C' : 'F'}</button>
  );
};

export default TemperatureToggle;

