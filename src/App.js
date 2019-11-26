import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import MemeGenerator from './Components/MemeGenerator.js'

function App() {
  return (
    <div className="App">
        <Header /> 
        <MemeGenerator/>
    </div>
  );
}

export default App;
