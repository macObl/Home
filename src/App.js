import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Doom from './components/doom/Doom';

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/doom" element={<Doom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
