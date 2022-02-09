import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/signup';
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
        </Routes>
      </Router>
      <HeroSection />
    </>
  );
}

export default App;
