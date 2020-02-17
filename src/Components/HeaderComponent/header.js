import React, {Component} from 'react';
import { Link } from "react-router-dom";

  class Header extends Component {
    render(){
      return(
        <div className="Header">
        <header>
        <h1><Link to='/' active style={{color:"white", textDecoration:"none"}}>Rowan Walsh</Link></h1>
        <h2>Welcome to me.</h2>
        </header>
        </div>
      );
    }
  }

export default Header;
