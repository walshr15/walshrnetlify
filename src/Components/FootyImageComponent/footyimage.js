import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import AwayDays from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/assets/images/awaydays.jpeg';

  class FootyImage extends Component {
    render(){
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

export default FootyImage;
