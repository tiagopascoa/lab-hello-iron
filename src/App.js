import "./App.css";
import About from "./About";

function App() {
  return (
    <>
      <div class="app">
        <nav class="navbar-container">
          <div>
            <img src="./ironhack-logo.svg" className="App-logo" alt="logo" />
          </div>
          <div>
            <img src="./menu-top.svg" className="App-logo" alt="logo" />
          </div>
        </nav>
        <div class="app-body">
          <h1>Say Hello to ReactJS</h1>
          <h4 class="app-body-text">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </h4>
          <a class="awesome-btn" href="#">
            Awesome!
          </a>
        </div>
      </div>
      <About />
    </>
  );
}

export default App;
