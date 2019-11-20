import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('')

  useEffect(() => {
    fetch('/.netlify/functions/response-after-5').then(res => res.text()).then(setResponse)
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
