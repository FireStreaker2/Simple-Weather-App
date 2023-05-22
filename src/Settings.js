import React, { useState } from "react";
import "./App.css";

function Debug({ onClose }) {
  var temperature = localStorage.getItem("Temperature");
  var speed = localStorage.getItem("Speed");
  var query = localStorage.getItem("Query");

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Debug Logs</h2>

        <div className="group">
          <p>Temperatre Measurement: {temperature}</p>
          <p>Speed Measurement: {speed}</p>
        </div>

        <div className="group">
          <p>Most recent query: {query}</p>
        </div>

        <button onClick={onClose} className="button">Close</button>
      </div>
    </div>
  );
}

function Settings() {
  const [showPopup, setShowPopup] = useState(false);

  const handleTemperatureChange = (event) => {
    localStorage.setItem("Temperature", event.target.value);
  };

  const handleSpeedChange = (event) => {
    localStorage.setItem("Speed", event.target.value);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <h1>Settings</h1>

        <div>
          <p>Measurement</p>
          <div className="group">
            <p>Temperature</p>
            <input type="radio" value="Celsius" name="temperature" onChange={handleTemperatureChange} />
            <label htmlFor="Celsius">Celsius</label>
            <input type="radio" value="Fahrenheit" name="temperature" onChange={handleTemperatureChange} />
            <label htmlFor="Fahrenheit">Fahrenheit</label>
          </div>

          <div className="group">
            <p>Speed</p>
            <input type="radio" value="Miles" name="speed" onChange={handleSpeedChange} />
            <label htmlFor="Miles">Miles</label>
            <input type="radio" value="Kilometers" name="speed" onChange={handleSpeedChange} />
            <label htmlFor="Kilometers">Kilometers</label>
          </div>
        </div>

        <div>
          <button onClick={handleShowPopup} className="button">Show Debug Logs</button>
        </div>

        {showPopup && <Debug onClose={handleClosePopup} />}
		
        <footer>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App" className="link">GitHub |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/issues" className="link"> Support |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/blob/main/LICENSE" className="link"> License |</a>
          <a href="/" className="link"> Home</a>
        </footer>
      </header>
    </div>
  );
}

export default Settings;