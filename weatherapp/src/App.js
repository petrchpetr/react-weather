import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          xEdit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, but how?
        </a>
      </header>
      <div>
      <Weather/>
      </div>
    </div>
  );
}

export default App;
