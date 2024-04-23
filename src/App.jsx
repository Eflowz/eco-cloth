import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import {Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE by neon</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
    </div>
  );
}

export default App;
