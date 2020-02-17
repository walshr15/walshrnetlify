import React, {Component} from 'react';
import Header from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/HeaderComponent/header';
import Projects from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/ProjectsComponent/projects';
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  class Pam extends Component {
    render(){
      return(
        <div className="Pam">
        <Header></Header>
        <h3><b>Programming & Me.</b></h3>
        <p2>I am a Computer Science & Business graduate from Trinity College Dublin having sat my final exams
           in May 2018.<br/>Currently, I am pursuing a career in software engineering as I love to write code and want
           to practice it as a full-time job. <br/>I have no doubt that I will go far in this career path.
           <br/><br/>Check out the cool stuff below if you want to know more!</p2>
        <Projects/>
        <p3>Email me at <a href="mailto: walshr2319@gmail.com">walshr2319@gmail.com</a> for my full CV or for any other information!</p3>
        <footer>Thanks for visiting! Be sure to check out the rest of my pages!<br/>
                I am actively working on having this webpage mobile/tablet friendly!</footer>
        </div>
      );
    }
  }

export default Pam;