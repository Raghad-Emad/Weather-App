import axios from "axios";

const API_KEY = "cca4405803f448dcab2151237231811";

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
  hourlyForecast: { time: string; temperature: number; iconUrl: string }[];
  weatherIconUrl: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  iconUrl: string;
}

export const fetchWeatherData = async (
  location: string
): Promise<WeatherData> => {
  try {
    // Fetch current weather data
    const currentResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    const currentDate = new Date().toLocaleDateString();

    // Fetch forecast data
    const forecastResponse = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1`
    );

    return {
      temperature: currentResponse.data.current.temp_c,
      summary: currentResponse.data.current.condition.text,
      highTemp: forecastResponse.data.forecast.forecastday[0].day.maxtemp_c,
      lowTemp: forecastResponse.data.forecast.forecastday[0].day.mintemp_c,
      forecastText:
        forecastResponse.data.forecast.forecastday[0].day.condition.text,
      currentDate: currentDate,
      cityName: currentResponse.data.location.name,
      isCelsius: true,
      dailyForecast: forecastResponse.data.forecast.forecastday
        .slice(1, 15)
        .map((day: any) => ({
          day: new Date(day.date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temperature: day.day.maxtemp_c,
        })),
      hourlyForecast: forecastResponse.data.forecast.forecastday[0].hour.map(
        (hour: any) => ({
          time: hour.time,
          temperature: hour.temp_c,
          iconUrl: `http:${hour.condition.icon}`,
        })
      ),
      weatherIconUrl: currentResponse.data.current.condition.icon,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
