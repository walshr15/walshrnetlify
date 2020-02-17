import React, {Component} from 'react';
import { AwesomeButtonSocial, AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

  class Projects extends Component {
    render(){
      return(
        <div className="Projects">
           <div class="row">

           <div class="column">
           <p>Checkout my GitHub!</p>
           <AwesomeButtonSocial
             type="github"
             href="https://github.com/walshr15"
             target="_blank">
             GitHub
           </AwesomeButtonSocial>
           </div>

           <div class="column">
           <p>Project Coming Soon!</p>
           <AwesomeButton
             type="primary"
             target="_blank"
             disabled={true}>
             Coming Soon...
           </AwesomeButton>
           </div>

           <div class="column">
           <p>Project Coming Soon!</p>
           <AwesomeButton
           type="primary"
           target="_blank"
           disabled={true}>
           Coming Soon...
           </AwesomeButton>
           </div>
           </div>
        </div>
      );
    }
  }

export default Projects;
