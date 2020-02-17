import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import SlimJxmmi from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/slimjxm.JPG';

  class MusicImage extends Component {
    render(){
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

export default MusicImage;
