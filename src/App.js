import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';
import About from './components/About';
import Index from './components/Index';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
     
     <About/>
      <Navigation />
    
    </div>
  );
}

export default App;
