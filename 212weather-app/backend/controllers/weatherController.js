const fetch = require('node-fetch');
const { WEATHER_API_KEY } = process.env;

const getWeather = async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`);
    const data = await response.json();
    if (data.cod !== 200) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getForecast = async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}`);
    const data = await response.json();
    if (data.cod !== '200') {
      return res.status(404).json({ message: 'City not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getWeather,
  getForecast
};
