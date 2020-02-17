import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import RWImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/RWImageComponent/rwimage';
import FootyImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/FootyImageComponent/footyimage';
import MusicImage from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/MusicImageComponent/musicimage';

  class Fields extends Component {
    render(){
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

export default Fields;
