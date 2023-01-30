import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: "Jan 28, Saturday 18:21",
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div class="weatherApp">
        <div class="container text-left">
          <div class="row">
            <div class="col">
              <h1 id="city">{weatherData.city}</h1>
              <p class="dateMonth" id="datetime">
                {weatherData.date}
              </p>
              <div class="temperature">
                <span id="description">{weatherData.description}</span>
              </div>
              <form class="inputGroup row" id="search-form">
                <div class="col-3">
                  <button type="button" class="btn btn-primary">
                    current
                  </button>
                </div>
                <div class="col-6">
                  <input
                    type="search"
                    id="city-search"
                    placeholder="Search city"
                    class="form-control"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="search"
                    class="btn btn-secondary"
                  />
                </div>
              </form>
            </div>

            <div class="col">
              <p>
                <img
                  alt={weatherData.description}
                  id="icon"
                  src={weatherData.iconUrl}
                />
                <strong class="cityTemperature" id="city-temp">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span class="units">
                  <a class="linkColor" href="/" id="celsius-link">
                    °C
                  </a>
                  |
                  <a class="linkColor" href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </p>
              <ul>
                <li>
                  Feels like:{" "}
                  <span id="feels_like">
                    {Math.round(weatherData.feels_like)}
                  </span>
                  °C
                </li>
                <li>
                  Humidity:{" "}
                  <span id="humidity">{Math.round(weatherData.humidity)}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(weatherData.wind)}</span>
                  km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="dividerClass" />
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
