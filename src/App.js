// App.js
import React from 'react';
import AgeCalculator from './AgeCalculator.js'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
      </header>
      <section className="App-content">
        <AgeCalculator /> 
      </section>
    </div>
  );
}

export default App;
