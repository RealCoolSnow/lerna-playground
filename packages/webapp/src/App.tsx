import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'common/dist/index.css'
import { CommonComponent } from 'common';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CommonComponent />
      </header>
    </div>
  );
}

export default App;
