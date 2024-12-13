import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchWeather = async (city, units = "metric") => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export const fetchForecast = async (city, units = "metric") => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.list;
  } catch (error) {
    console.error("Error fetching forecast data", error);
    return [];
  }
};

export const fetchClothingData = async (unit = "metric", token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clothing`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const clothing = response.data;

    if (unit === "imperial") {
      return clothing.map((item) => ({
        ...item,
        minTemp: (item.minTemp * 9) / 5 + 32,
        maxTemp: (item.maxTemp * 9) / 5 + 32,
      }));
    }

    return clothing;
  } catch (error) {
    console.error("Error fetching clothing data", error);
    return [];
  }
};

export const signUp = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const signIn = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
