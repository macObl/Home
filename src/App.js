import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Doom from './components/doom/Doom';

function App() {
  return (
    <BrowserRouter basename='/home'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doom" element={<Doom />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
