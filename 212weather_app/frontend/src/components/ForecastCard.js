import React from "react";

const ForecastCard = ({ forecast, unit }) => {
  const temperature = unit === "metric" ? forecast.main.temp : (forecast.main.temp * 9) / 5 + 32;

  return (
    <div className="forecast-card">
      <h4>{new Date(forecast.dt * 1000).toLocaleDateString()}</h4>
      <p>Temp: {temperature.toFixed(1)}°</p>
      <p>Weather: {forecast.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
