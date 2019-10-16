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
      <main>
        <Hero 
          heading="Don't just build a website"
          title="Build digital experiences"
          body="Hello! My name is Alvaro and I am a Front-End Developer. Play around with my site to know a bit more about me and what I do."
        />
      </main>
    </div>
  );
}

export default App;
