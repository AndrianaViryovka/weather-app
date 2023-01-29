import "./App.css";
import Weather from "./Weather";
import Background from "./images/sky.jpg";

function App() {
  return (
    <div
      class="back-image"
      style={{
        background: `url(${Background})`,
        height: "110vh",
        marginTop: "-80px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="App">
        <div className="container">
          <header className="App-header">
            <p>
              <Weather />
              <small class="GitNetlifyLink">
                <a
                  id="git-link"
                  href="https://github.com/AndrianaViryovka/SheCodes-weather-app"
                  target="_blank"
                >
                  Open-sourced on GitHub
                </a>
                and
                <a
                  id="netlify-link"
                  href="https://euphonious-piroshki-2d6a21.netlify.app"
                  target="_blank"
                >
                  hosted on Netlify
                </a>
                , by Andriana Slobozheniuk
              </small>
            </p>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
