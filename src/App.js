import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./sun.png";
import "./App.css";
import Settings from "./Settings";

const fetchData = (location, setData) => {
  var api = process.env.NODE_ENV === "development" ? `http://localhost:3001/api?q=${location}` : `/api?q=${location}`;
  fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Location not found");
    }
    return response.json();
  })
  .then((data) => {
    setData(data);
  })
  .catch(error => {
    localStorage.setItem("Error", true);
    console.error(error);
  });
}

function WeatherResult({ data, onClose}) {
  const { location, current } = data;
  var temperature = localStorage.getItem("Temperature");
  var speed = localStorage.getItem("Speed");
  var error = localStorage.getItem("Error");

  if (error === true) {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>Error: Location not found. Please make sure you have entered a valid location and try again. If this issue persists please contact support.</p>

          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Weather Result</h2>

        <h3>Location</h3>
        <p>City: {location.name}</p>
        <p>Region: {location.region}</p>
        <p>Country: {location.country}</p>

        <h3>Current Weather</h3>
        <p>Temperature: {temperature === "Celsius" ? `${current.temp_c}°C` : `${current.temp_f}°F`}</p>

        <p>Condition: {current.condition.text}</p>
        <p>Humidity: {current.humidity}%</p>

        <h3>Additional Details</h3>
        <p>Wind Speed: {speed === "Kilometers" ? `${current.wind_kph} km/h` : `${current.wind_mph} m/h`}</p>
        <p>Pressure: {current.pressure_mb} mb</p>
        <p>Feels Like: {temperature === "Celsius" ? `${current.feelslike_c}°C` : `${current.feelslike_f}°F`}</p>
        <p>Visibility: {speed === "Kilometers" ? `${current.vis_km} km` : `${current.vis_miles} m`}</p>
        <p>UV Index: {current.uv}</p>

        <button onClick={onClose} className="button">Close</button>
      </div>
    </div>
  );
}

function Home() {
	const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
	
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Query", inputValue)
    fetchData(inputValue, setWeatherData);
    setShowPopup(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("Error", false);
  };
  
  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to the Simple Weather App! Get started below.</h1>

        <form onSubmit={handleSubmit} className="search-bar">
          <input type="search" placeholder="Enter Coordinates Here." name="search" pattern=".*\S.*" required onChange={handleChange} />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>

        {weatherData && showPopup && <WeatherResult data={weatherData} onClose={handleClosePopup} />}
		
        <footer>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App" className="link">GitHub |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/issues" className="link"> Support |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/blob/main/LICENSE" className="link"> License |</a>
          <a href="/settings" className="link"> Settings</a>
        </footer>

      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;