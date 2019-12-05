import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Counter number={0} />
        <hr />
        <Todos />
        </div>
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
