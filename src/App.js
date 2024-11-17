import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import WeatherSearch from './components/WeatherSearch';

const API_KEY = 'da747e2d77cc8c1394213e22c79c4e60';  
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = (city) => {
    axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => {
        setWeatherData(response.data);
        setError(null); 
      })
      .catch(err => {
        setWeatherData(null);
        setError('City not found');
      });
  };

  return (
    <div className="App">
      <h1 className="title">Weather Dashboard</h1>
      <WeatherSearch fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
