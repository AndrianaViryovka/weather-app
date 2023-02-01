import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="container text-right">
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
            <div class="row">
              <div class="col-4">
                <img
                  alt={props.data.description}
                  id="icon"
                  src={props.data.iconUrl}
                />
              </div>
              <div class="col-8">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
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
