import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Unveil from './components/unveil/Unveil';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Unveil />  
      <Header />
      <Hero 
        heading="Don't just build a website"
        title="Build digital experiences"
      />
    </div>
  );
}

export default App;
