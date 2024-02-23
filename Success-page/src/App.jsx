import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import './App.css'
function App() {
  return (
    <>
      <div>
    
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </Router>
  </div>
    </>
  );
}

export default App;
