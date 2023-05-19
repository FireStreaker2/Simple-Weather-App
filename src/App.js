import React, { useState } from "react";
import logo from './sun.png';
import './App.css';

const fetchData = (location, setData) => {
  const key = process.env.REACT_APP_KEY;
  var api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

  fetch(api)
  .then((response) => (response.json()))
  .then((data) => {
    var stringData = JSON.stringify(data);
    setData(stringData);
  })
  .catch(error => {
    console.error(error);
    alert(error);
  });
}

function WeatherResult({ data, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Your Weather Result!</h2>
        <p>{data}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
	
	const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
	
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value:", inputValue);
    fetchData(inputValue, setWeatherData);
    setShowPopup(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Welcome to the Simple Weather App! Get started below.</p>

        <form onSubmit={handleSubmit} class="search-bar">
          <input type="search" placeholder="Enter Coordinates Here." name="search" pattern=".*\S.*" required onChange={handleChange} />
          <button class="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>

        {weatherData && showPopup && <WeatherResult data={weatherData} onClose={handleClosePopup} />}
		
        <footer>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App" class="link">GitHub |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/issues" class="link"> Support |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/blob/main/LICENSE" class="link"> License</a>
        </footer>

      </header>
    </div>
  );
}

export default App;