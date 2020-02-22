import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';
import About from './components/About';
import Index from './components/Index';
import Navigation from './components/Navigation';
import { Router, browserHistory } from 'react-router-dom';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import DocRegistration from './components/DocRegistration';


function App() {
  return (
    <div>

{/* <Dashboard/> */}

    { <BrowserRouter>
      <Route exact path ="/" component={Index}/>
      <Route path='/about' component={About} />
      <Route path= '/Registration' component={Registration}/>
      <Route path='/Dashboard' component={Dashboard}/>
      <Route path='/DocRegistration' component={DocRegistration}/>
      </BrowserRouter> } 
  
    
    </div>
  );
}

export default App;
