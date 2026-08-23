import React from 'react';
import DrawingCanvas from './DrawingCanvas';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SketchGPT</h1>
      <p className="subtitle">Draw something and let our AI guess and describe it!</p>
      <DrawingCanvas />
    </div>
  );
}

export default App;
