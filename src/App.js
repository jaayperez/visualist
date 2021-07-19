import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // Adding the Alan button
	useEffect(() => {
		alanBtn({
      key: '1f4ec1145384064b6dfca9f6aa11f4b72e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand: (commandData) => {
				if (commandData.command === 'go:back') {
					// Call the client code that will react to the received command
				}
			}
		});
	}, []);
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
