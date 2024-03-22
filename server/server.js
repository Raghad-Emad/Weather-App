import express from 'express';
import cors from 'cors';
import { get } from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
    try {
        const { data } = await get('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: 'YOUR_API_KEY',
                q: 'New Cairo',
                days: 4 // Number of days for forecast
            }
        });
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
