import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import MusicaPage from './pages/MusicaPage';
import MundusPage from './pages/MundusPage';
import TechnologiaPage from './pages/TechnologiaPage';
import NegotiumPage from './pages/NegotiumPage';

function App() {
  return (
    <LanguageProvider>
      <Router basename="/Nuntium">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/musica" element={<MusicaPage />} />
          <Route path="/mundus" element={<MundusPage />} />
          <Route path="/tech" element={<TechnologiaPage />} />
          <Route path="/business" element={<NegotiumPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
