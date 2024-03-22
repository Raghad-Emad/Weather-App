// const API_KEY = 'cca4405803f448dcab2151237231811';

// export const fetchWeatherData = async (city: string) => {
//   const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch weather data');
//   }
//   return response.json();
// };


import axios from 'axios';

const API_KEY = 'cca4405803f448dcab2151237231811';

export const fetchWeatherData = async (location: string) => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    const currentDate = new Date().toLocaleDateString();
    return {
      temperature: response.data.current.temp_c,
      summary: response.data.current.condition.text,
      cityName: response.data.location.name, 
      currentDate: currentDate,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};



// const BASE_URL = 'http://localhost:5000'; // Assuming server is running on port 5000

// const WeatherService = {
//     getWeatherData: async () => {
//         try {
//             const response = await axios.get(`${BASE_URL}/weather`);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//             throw error;
//         }
//     }
// };

// export default WeatherService;