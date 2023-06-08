
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About2';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero></Hero>
      <About></About>
      <Projects />
    </Router>
    </>
  );
}

export default App;
