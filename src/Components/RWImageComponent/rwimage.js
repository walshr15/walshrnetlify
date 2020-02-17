import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import RWPhoto from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/RW.png';

  class RWImage extends Component {
    render(){
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

export default RWImage;
