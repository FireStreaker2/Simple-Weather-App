import React, { useState } from "react";
import logo from './sun.png';
import './App.css';

function Settings() {
  
  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Settings</p>

        <div>
            <p>Temperature</p>
            <input type="radio" value="Celcius" name="temperature" checked />
            <label for="Celcius">Celcius</label>
            <input type="radio" value="Farenheit" name="temperature" />
            <label for="Farenheit">Farenheit</label>
        </div>

        <div>
            <button>Show Debug Logs</button>
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