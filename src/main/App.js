import React from 'react';
import StationList from '../component/StationList';
import './App.css';
import Lottery from '../component/Lottery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>開抽</p>
        </div>
        <Lottery />
        <StationList />
      </header>
    </div>
  );
}

export default App;