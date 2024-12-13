import React, { useState, useEffect } from "react";
import { fetchWeather, fetchForecast, fetchClothingData } from "../api";
import ClothingCard from "../components/ClothingCard";
import WeatherCard from "../components/WeatherCard";
import DateTimeCard from "../components/DateTimeCard";
import ForecastCard from "../components/ForecastCard";

const Home = () => {
  const [city, setCity] = useState(localStorage.getItem("preferredCity") || "");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [clothingData, setClothingData] = useState([]);
  const unit = localStorage.getItem("unit") || "metric";

  useEffect(() => {
    if (city) {
      fetchWeather(city, unit).then(setWeatherData);
      fetchForecast(city, unit).then(setForecastData);
    }
  }, [city, unit]);

  useEffect(() => {
    if (weatherData) {
      fetchClothingData(unit).then((clothing) => {
        setClothingData(clothing);
      });
    }
  }, [weatherData, unit]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("preferredCity", city);
      fetchWeather(city, unit).then(setWeatherData);
      fetchForecast(city, unit).then(setForecastData);
    }
  };

  return (
    <div className="home-page">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city"
        />
      </div>
      {weatherData && (
        <>
          <DateTimeCard city={city} />
          <WeatherCard weatherData={weatherData} unit={unit} />
          {forecastData.slice(0, 10).map((forecast, index) => (
            <ForecastCard key={index} forecast={forecast} unit={unit} />
          ))}
          <div className="clothing-container">
            <h3>Clothing Suggestions</h3>
            {clothingData
              .filter(
                (item) =>
                  weatherData.main.temp >= item.minTemp &&
                  weatherData.main.temp <= item.maxTemp
              )
              .map((clothing) => (
                <ClothingCard key={clothing._id} clothing={clothing} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
