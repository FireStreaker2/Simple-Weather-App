import React from "react";
import "./App.css";

function Settings() {
  const handleTemperatureChange = (event) => {
    localStorage.setItem("Temperature", event.target.value);
  };

  const handleSpeedChange = (event) => {
    localStorage.setItem("Speed", event.target.value);
  };

  const debug = () => {
    alert("WIP");
  }
  
  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <h1>Settings</h1>

        <div>
          <p>Measurement</p>
          <div className="group">
            <p>Temperature</p>
            <input type="radio" value="Celsius" name="temperature" onChange={handleTemperatureChange} />
            <label for="Celsius">Celsius</label>
            <input type="radio" value="Fahrenheit" name="temperature" onChange={handleTemperatureChange} />
            <label for="Fahrenheit">Fahrenheit</label>
          </div>

          <div className="group">
            <p>Speed</p>
            <input type="radio" value="Miles" name="speed" onChange={handleSpeedChange} />
            <label for="Miles">Miles</label>
            <input type="radio" value="Kilometers" name="speed" onChange={handleSpeedChange} />
            <label for="Kilometers">Kilometers</label>
          </div>
        </div>

        <div>
          <button onClick={debug}>Show Debug Logs</button>
        </div>
		
        <footer>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App" class="link">GitHub |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/issues" class="link"> Support |</a>
          <a href="https://github.com/FireStreaker2/Simple-Weather-App/blob/main/LICENSE" class="link"> License |</a>
          <a href="/" class="link"> Home</a>
        </footer>
      </header>
    </div>
  );
}

export default Settings;