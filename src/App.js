import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Login/>
    <Footer/>
    </div>
  );
}

export default App;
