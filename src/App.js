import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Unveil from './components/unveil/Unveil';

function App() {
  return (
    <div className="App">
      <Unveil />  
      <Header />
    </div>
  );
}

export default App;
