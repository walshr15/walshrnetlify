import { AwesomeButton } from "react-awesome-button";
import React, {Component} from 'react';
import "react-awesome-button/dist/styles.css";
import Pam from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/PAMComponent/pam';
import Home from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/HomeComponent/home';

import { Link } from "react-router-dom";

  class LearnMore extends Component {
    render(){
      return(
        <div className="LearnMore">
        <div class="row">

          <div class="column">
          <Link to='/pam'>
            <AwesomeButton
              type="primary"
              target="_blank">
              Learn More!
            </AwesomeButton>
            </Link>
          </div>

          <div class="column">
          <Link to='/sam'>
            <AwesomeButton
              type="primary"
              target="_blank">
              Learn More!
            </AwesomeButton>
            </Link>
          </div>

          <div class="column">
          <Link to='/mam'>
            <AwesomeButton
              type="primary"
              target="_blank">
              Learn More!
            </AwesomeButton>
            </Link>
          </div>

         </div>
        </div>
      );
    }
  }

export default LearnMore;
