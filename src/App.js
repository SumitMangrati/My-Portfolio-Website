
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About2';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <About/>
    </Router>
    </>
  );
}

export default App;
