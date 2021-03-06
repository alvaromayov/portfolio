import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Unveil from './components/unveil/Unveil';
import Hero from './components/hero/Hero';
import CookiesBanner from './components/cookies/Cookies';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Unveil />  
      <Header />
      <main>
        <Hero 
          heading="Don't just build a website"
          title="Build digital experiences"
          body="Hello! My name is Alvaro and I am a Front-End Developer. Play around with my site to learn a bit more about me and what I do."
        />
        <Projects background="grey"/>
        <CookiesBanner />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
