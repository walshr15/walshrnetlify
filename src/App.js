import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderComponent/header';
import Home from './Components/HomeComponent/home';
import Pam from './Components/PAMComponent/pam';
import Sam from './Components/SAMComponent/sam';
import Mam from './Components/MAMComponent/mam';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Helmet } from 'react-helmet';

const TITLE = 'Rowan Walsh';


  class App extends Component {
    render(){
      return(
        <Router>
          <div className="App">
            <Helmet>
              <title>{ TITLE }</title>
            </Helmet>
            <Route path="/" exact component={Home}/>
            <Route path="/pam" component={Pam}/>
            <Route path="/sam" component={Sam}/>
            <Route path="/mam" component={Mam}/>
          </div>
        </Router>
      );
    }
  }

export default App;
