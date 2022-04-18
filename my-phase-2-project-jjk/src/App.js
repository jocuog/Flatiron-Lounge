import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
const API ="http://localhost:3000/drinks"
function App() {
  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(console.log)
  }

  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
