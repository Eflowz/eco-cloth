import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
    </div>
  );
}

export default App;
