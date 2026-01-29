import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import MusicaPage from './pages/MusicaPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/musica" element={<MusicaPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
