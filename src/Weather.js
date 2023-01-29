import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div class="weatherApp">
      <div class="container text-left">
        <div class="row">
          <div class="col">
            <h1 id="city">Kyiv</h1>
            <p class="dateMonth" id="datetime">
              Jan 28, Saturday 18:21
            </p>
            <div class="temperature">
              <span id="description">Overcast Clouds</span>
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
                <input type="submit" value="search" class="btn btn-secondary" />
              </div>
            </form>
          </div>

          <div class="col">
            <p>
              <img
                alt="icon"
                id="icon"
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
              />
              <strong class="cityTemperature" id="city-temp">
                -1
              </strong>
              <span class="units">
                <a class="linkColor" href="#" id="celsius-link">
                  °C
                </a>
                |
                <a class="linkColor" href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </p>
            <ul>
              <li>
                Feels like: <span id="feels_like"></span>°C
              </li>
              <li>
                Humidity: <span id="humidity"></span>%
              </li>
              <li>
                Wind: <span id="wind"></span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="dividerClass" />
    </div>
  );
}
