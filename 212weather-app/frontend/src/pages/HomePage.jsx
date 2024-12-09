import React, { useState } from 'react';
import WeatherWidget from '../components/WeatherWidget';

const HomePage = () => {
  const [city, setCity] = useState('London');
  const [units, setUnits] = useState('metric');
  
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value);
    }
  };

  const handleUnitChange = (unit) => {
    setUnits(unit);
  };

  const handleCityChange = () => {
    const input = document.getElementById('city-input');
    setCity(input.value);
  };

  const homePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    widht: '100%',
    padding: '20px',
    height: '100vh',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={homePageStyle}>
      <input
        id="city-input"
        type="text"
        placeholder="Search city"
        onKeyDown={handleSearch}
        style={inputStyle}
      />
      <button onClick={handleCityChange} style={buttonStyle}>
        Change City
      </button>
      <button onClick={() => handleUnitChange('metric')} style={buttonStyle}>
        °C
      </button>
      <button onClick={() => handleUnitChange('imperial')} style={buttonStyle}>
        °F
      </button>
      <WeatherWidget cityId="6167865" appid="6a5ae2c51deb1d68682554fbe226b02e" units={units} />
    </div>
  );
};

export default HomePage;
