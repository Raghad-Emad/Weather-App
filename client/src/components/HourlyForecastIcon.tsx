import React from "react";

interface HourlyForecastIconProps {
  iconUrl: string;
}

const HourlyForecastIcon: React.FC<HourlyForecastIconProps> = ({ iconUrl }) => {
  return (
    <div>
      <img src={iconUrl} alt="Weather Icon" />
    </div>
  );
};

export default HourlyForecastIcon;
