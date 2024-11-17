import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { description } = weather[0];
  const { speed } = wind;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
      <div className="weather-info">
        <div className="temp">
          <h3>{temp}°C</h3>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
