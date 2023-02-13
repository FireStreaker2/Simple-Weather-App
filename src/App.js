import logo from './sun.png';
import './App.css';

function App() {

    const showAlert = () => {
      var url = window.location.href;
      // remember to change this for prod
      var query = url.replace("http://localhost:3000/?search=", "");

      // alert(query);
    }

  return (
    <div className="App">
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


