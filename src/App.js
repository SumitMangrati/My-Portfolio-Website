
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About2';
import Skills from './components/Skills';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero></Hero>
      <About></About>
    </Router>
    </>
  );
}

export default App;
