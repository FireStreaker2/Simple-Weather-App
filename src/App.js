import logo from './sun.png';
import './App.css';
import * as dotenv from "dotenv";
dotenv.config()

function App() {

    const showAlert = () => {
      var url = window.location.href;
      // remember to change this for prod
      var queryString = window.location.protocol + "//" + window.location.hostname + "/?search=";
      var query = url.replace(queryString, "");
      
      const body = document.getElementById("canvas");
      const popup = document.createElement("div");
      var locationText = document.createElement("h1");
      locationText.innerHTML = query
        
      popup.style.width = "50%";
      popup.style.height = "50%";
        
      body.appendChild(popup);
      popup.appendChild(locationText);

      const key = process.env.KEY;
      const api = "https://api.weatherapi.com/v1/current.json?key=" + key + "?q=" + query;

      //retrieve data
      fetch(api)
      .then((response) => (response.json()))
      .then((data) => function() {
        console.log(data);
        
        // store data
        var name = data.location.name;
        var region = data.location.region;
        var celcius = data.current.temp_c;
        var farenheit = data.current.temp_f;
        
        var wind_mph = data.current.wind_mph;
        var wind_kph = data.current.wind_kph;
        
        var humidty = data.current.humidity;
        
        // make popup work
        nameText = document.createElement("p");
        regionText = document.createElement("p");
        celciusText = document.createElement("p");
        farenheitText = document.createElement("p");
        windMPHText = document.createElement("p");
        windKPHText = document.createElement("p");
        humidityText = document.createElement("p");
        
        nameText.innerHTML = name
        regionText.innerHTML = region
        celciusText.innerHTML = celcius
        farenheitText.innerHTML = farenheit
        windMPHText.innerHTML = wind_mph
        windKPHText.innerHTML = wind_kph
        humidityText.innerHTML = humidity
        
        popup.appendChild(nameText);
        popup.appendChild(regionText);
        popup.appendChild(celciusText);
        popup.appendChild(farenehitText);
        popup.appendChild(windMPHText);
        popup.appendChild(windKPHText);
        popup.appendChild(humidityText);
			
		});
  }

  return (
    <div className="App" id="canvas">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Welcome to the Simple Weather App! Get started below.</p>

        <form action="" class="search-bar">
          <input type="search" placeholder="Enter Coordinates Here." name="search" pattern=".*\S.*" required/>
          <button class="search-btn" type="submit" onClick={showAlert}>
            <span>Search</span>
          </button>
        </form>
		
		<footer>
			<a href="https://github.com/FireStreaker2/Simple-Weather-App" class="link">GitHub |</a>
			<a href="https://github.com/FireStreaker2/Simple-Weather-App/issues" class="link"> Support |</a>
			<a href="https://github.com/FireStreaker2/Simple-Weather-App/blob/main/LICENSE" class="link"> License</a>
		</footer>

    <script src="./search.js"></script>
      </header>
    </div>
  );
}

export default App;