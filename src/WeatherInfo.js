import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="container text-left">
        <div class="row">
          <div class="col-6">
            <h1 id="city">{props.data.city}</h1>
            <p class="dateMonth" id="datetime">
              <FormattedDate date={props.data.date} />
            </p>
            <div class="temperature">
              <span id="description">{props.data.description}</span>
            </div>
          </div>

          <div class="col-6">
            <p>
              <img
                alt={props.data.description}
                id="icon"
                src={props.data.iconUrl}
              />
              <strong class="cityTemperature" id="city-temp">
                {Math.round(props.data.temperature)}
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
                <span id="feels_like">{Math.round(props.data.feels_like)}</span>
                °C
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity">{Math.round(props.data.humidity)}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(props.data.wind)}</span>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="dividerClass" />
    </div>
  );
}
