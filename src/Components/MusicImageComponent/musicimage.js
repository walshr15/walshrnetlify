import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import SlimJxmmi from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/slimjxm.JPG';

  class MusicImage extends Component {
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
          <div className="MusicImageMobile">
          <ExampleComponent
            image={SlimJxmmi}
            // roundedColor="#eb34b7"
            roundedColor = "#faa148"
            imageWidth="350"
            imageHeight="350"
            roundedSize="15"
          />
          </div>

        );

      } else {

      return(
        <div className="MusicImage">
        <ExampleComponent
          image={SlimJxmmi}
          // roundedColor="#eb34b7"
          roundedColor = "#faa148"
          imageWidth="350"
          imageHeight="350"
          roundedSize="15"
        />
        </div>
      );
    }
  }
}

export default MusicImage;
