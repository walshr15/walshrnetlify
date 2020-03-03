import React, {Component} from 'react';
import ExampleComponent from "react-rounded-image";
// import RWPhoto from '/Users/rowan/Workspace/Github Pages/githubpages/src/App.js';
import Fields from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/FieldsComponent/fields';
import Header from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/HeaderComponent/header';
import AndMe from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/AndMeComponent/andme';
import LearnMore from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/LearnMoreComponent/learnmore';
import Pam from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/PAMComponent/pam';
import { AwesomeButton } from "react-awesome-button";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  class Home extends Component {
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
            <Header></Header>
            <p1>What would you like to know about me?</p1>
            <Fields/>
            <footer1></footer1>
          </div>

        );

      } else {

      return(
        <div>
          <Header></Header>
          <p1>What would you like to know about me?</p1>
          <AndMe/>
          <Fields/>
          <LearnMore/>
          <footer1></footer1>
        </div>

      );
    }
  }
}

export default Home;
