import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud , faDropletPercent } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = ` https://api.openweathermap.org/data/2.5/weather?q=HANOI&units=metric&appid=53d2b9e5ffc4c41135c1487777c28306`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Tìm kiếm "
          type="text"
          className="searchWeather"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>
                <FontAwesomeIcon icon={faCloud} color="blue" />
                {data.main.temp.toFixed()}°F
              </h1>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">
              
                  {data.main.feels_like.toFixed()}°F
                </p>
              ) : null}
              <p>Độ c </p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Độ Ẩm </p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Tốc Độ Gió </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
