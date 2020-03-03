import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import RWPhoto from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/RW.png';

  class RWImage extends Component {
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
          <div className="RWImageMobile">
          <ExampleComponent
            image={RWPhoto}
            // roundedColor="#eb34b7"
            roundedColor = "#fad70f"
            imageWidth="350"
            imageHeight="350"
            roundedSize="15"
          />
          </div>

        );

      } else {

      return(
        <div className="RWImage">
        <ExampleComponent
          image={RWPhoto}
          // roundedColor="#eb34b7"
          roundedColor = "#fad70f"
          imageWidth="350"
          imageHeight="350"
          roundedSize="15"
        />
        </div>
      );
    }
  }
}

export default RWImage;
