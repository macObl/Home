import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Doom from './components/doom/Doom';

function App() {
  return (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/doom" element={<Doom />} />
        </Routes>
  );
}

export default App;
