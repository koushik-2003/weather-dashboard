import React, { useState } from 'react';

const WeatherSearch = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <div className="weather-search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherSearch;
