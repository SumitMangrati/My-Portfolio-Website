
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About2';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects></Projects>
    </BrowserRouter>
    </>
  );
}

export default App;
