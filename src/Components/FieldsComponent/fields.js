import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import RWImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/RWImageComponent/rwimage';
import FootyImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/FootyImageComponent/footyimage';
import MusicImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/MusicImageComponent/musicimage';

import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";

  class Fields extends Component {
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
            <div class="andMeMobile"><p>Programming & Me.</p></div>
            <div class="imageMobile"><RWImage/></div>
            <div class="LearnMoreMobile"><Link to='/pam'>
              <AwesomeButton
                type="primary"
                target="_blank">
                Learn More!
              </AwesomeButton>
              </Link>
            </div>

            <div class="andMeMobile"><p>Sports & Me.</p></div>
            <div class="imageMobile"><FootyImage/></div>
            <div class="LearnMoreMobile"><Link to='/sam'>
              <AwesomeButton
                type="primary"
                target="_blank">
                Learn More!
              </AwesomeButton>
              </Link>
            </div>

            <div class="andMeMobile"><p>Music & Me.</p></div>
            <div class="imageMobile"><MusicImage/></div>
            <div class="LearnMoreMobile">
            <Link to='/mam'>
              <AwesomeButton
                type="primary"
                target="_blank">
                Learn More!
              </AwesomeButton>
              </Link>
            </div>
          </div>
        );

      } else {


      return(
        <div className="Fields">
           <div class="row">
           <div class="column"><RWImage/></div>
           <div class="column"><FootyImage/></div>
           <div class="column"><MusicImage/></div>
           </div>
        </div>
      );
    }
  }
}

export default Fields;
