import "./weathericon.css";
import React from "react";

interface WeatherIconProps {
  iconUrl: string;
  temperature: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconUrl }) => {
  return <img src={iconUrl} alt="Weather Icon" />;
};

export default WeatherIcon;

// Add an empty export statement to mark the file as a module
export {};
