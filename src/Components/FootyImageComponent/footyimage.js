import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import AwayDays from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/awaydays.jpeg';

  class FootyImage extends Component {
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
          <div className="FootyImageMobile">
          <ExampleComponent
            image={AwayDays}
            // roundedColor="#eb34b7"
            roundedColor = "#be54ff"
            imageWidth="350"
            imageHeight="350"
            roundedSize="15"
          />

          </div>

        );

      } else {

      return(
        <div className="FootyImage">
        <ExampleComponent
          image={AwayDays}
          // roundedColor="#eb34b7"
          roundedColor = "#be54ff"
          imageWidth="350"
          imageHeight="350"
          roundedSize="15"
        />
        </div>
      );
    }
  }
}

export default FootyImage;
