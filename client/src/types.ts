export interface WeatherData {
    temperature: number;
    summary: string;
    highTemp: number;
    lowTemp: number;
    forecastText: string;
    currentDate: string;
    cityName: string;
    isCelsius: boolean;
    dailyForecast: { day: string; temperature: number }[];
    hourlyForecast: { time: string; temperature: number }[];
  }
  