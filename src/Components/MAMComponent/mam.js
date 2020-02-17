import React, {Component} from 'react';
import Header from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/HeaderComponent/header';

  class Mam extends Component {
    render(){
      return(
        <div className="Mam">
        <Header></Header>
        <h3><b>Music & Me.</b></h3>
        <p2>I spend a huge amount of time listening to music, and I am obsessed with both hip-hop music and its culture!<br/>
           Check out some of my favourite songs, artists and albums below!
           Let me know your opinion and let's have a debate about hip-hop!</p2>

        <div>
        <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLJont-VghyhWdLdiV-nEEPrit3oHArfb8"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <footer>Thanks for visiting! Be sure to check out the rest of my pages!<br/>
                I am actively working on having this webpage mobile/tablet friendly!
        </footer>
        </div>
      );
    }
  }

export default Mam;
