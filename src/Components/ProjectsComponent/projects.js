import React, {Component} from 'react';
import { AwesomeButtonSocial, AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

  class Projects extends Component {

    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
    }

    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };

    render(){
      const { width } = this.state;
      const isMobile = width <= 900;

      if (isMobile) {
        return (
          <div>
          <div class="ProjectsMobile">
          <p>Checkout my GitHub!</p>
          <AwesomeButtonSocial
            type="github"
            href="https://github.com/walshr15"
            target="_blank">
            GitHub
          </AwesomeButtonSocial>
          </div>

          <div class="ProjectsMobile">
          <p>Project Coming Soon!</p>
          <AwesomeButton
            type="primary"
            target="_blank"
            disabled={true}>
            Coming Soon...
          </AwesomeButton>
          </div>


          <div class="ProjectsMobile">
          <p>Project Coming Soon!</p>
          <AwesomeButton
          type="primary"
          target="_blank"
          disabled={true}>
          Coming Soon...
          </AwesomeButton>
          </div>

          </div>

        );

      } else {

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
}
export default Projects;
