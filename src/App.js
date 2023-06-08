
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
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
