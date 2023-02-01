import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="city-temp">
          {Math.round(props.celsius)}
        </span>
        <span className="units">°C|</span>

        <span className="units">
          <a
            class="linkColor"
            href="/"
            id="celsius-link"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="city-temp">
          {Math.round(fahrenheit())}
        </span>

        <span className="units">
          <a class="linkColor" href="/" id="celsius-link" onClick={showCelsius}>
            °C|
          </a>
        </span>

        <span className="units">°F</span>
      </div>
    );
  }
}
