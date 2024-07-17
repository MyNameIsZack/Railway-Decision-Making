import React from 'react';
import StationList from './component/StationList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>開抽</p>
        </div>
        <StationList />
      </header>
    </div>
  );
}

export default App;