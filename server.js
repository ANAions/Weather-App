const express = require('express');
const axios = require('axios'); // Import axios
require('dotenv').config(); 
const app = express();
const PORT = 3000;

// Replace with your OpenWeatherMap API key
console.log("Server is running on http://localhost",process.env.OPENWEATHER_API_KEY);
const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Middleware to parse JSON
app.use(express.json());

// Endpoint to get weather by city name
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    // Fetch weather data using axios
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
console.log("Paap.......",data)
    // Respond with weather data
    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
    });
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Internal server error',
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});