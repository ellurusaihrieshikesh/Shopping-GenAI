import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MyApp from './components/Home';
import Footer from './components/Footer';
import Addtocart from './components/Addtocart';
import CombinedComponent from './components/Login'; 
import ContactUs from './components/Emailorderform'; 
import axios from 'axios';
import Signup from './components/Signup';


const App = () => {
  return (
    
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              </ul>
            </div>
          </div>
        </nav>

        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MyApp />} />
            <Route path="/addtocart" element={<Addtocart />} />
            <Route path="/login" element={<CombinedComponent />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <FooterDisplay />
      </div>
    </Router>
  );
};

const FooterDisplay = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Footer /> : null;
};

export default App;