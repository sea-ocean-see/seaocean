import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import UnspokenWords from './components/UnspokenWords';
import Links from './components/Links';
import NanoGame from './components/NanoGame';
import ThoughtsPage from './pages/ThoughtsPage';
import BackgroundSlider from './components/BackgroundSlider';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thoughts" element={<ThoughtsPage />} />
        <Route path="/" element={
          <div className="relative min-h-screen">
            <BackgroundSlider />
            <div className="relative z-10">
              <Header />
              <Introduction />
              <Experience />
              <Projects />
              <Publications />
              <Awards />
              <Leadership />
              <Skills />
              <UnspokenWords />
              <Links />
              <NanoGame />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;