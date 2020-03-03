import React, {Component} from 'react';
import Header from '/Users/rowan/Workspace/walshrnetlify/walshr15netlify/src/Components/HeaderComponent/header';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton,
  TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton,
  TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

  class Sam extends Component {

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
            <h3><b>Sport & Me.</b></h3>
            <div class="textMobile">
            <p4>I have always had huge interest in sport (both watching and playing it).<br/>
               I have played both football and cricket at a high level, and am a keen golfer too!
              Feel free to have either a civilised discussion or a heated debate with me over any sports topic you like!<br/><br/>
              I'm a huge Everton fan, and play my own football for CYM Beechwood!</p4>
            </div>
            <div class="TwitterMobile">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName='everton' autoHeight />
              </div>
            </div>

            <div class="TwitterMobile">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName="cymbeechwood" autoHeight />
              </div>
            </div>

            <div class="TwitterMobile">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName="premierleague" autoHeight />
              </div>
            </div>
            <footer1>Thanks for visiting! Be sure to check out the rest of my pages!</footer1>
          </div>

        );

      } else {

      return(
        <div className="Sam">
          <Header></Header>
          <h3><b>Sport & Me.</b></h3>
          <p2>I have always had huge interest in sport (both watching and playing it).<br/>
             I have played both football and cricket at a high level, and am a keen golfer too!
            Feel free to have either a civilised discussion or a heated debate with me over any sports topic you like!<br/><br/>
            I'm a huge Everton fan, and play my own football for CYM Beechwood!</p2>
          <div class="row">

            <div class="column">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName='everton' autoHeight />
              </div>
            </div>

            <div class="column">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName="cymbeechwood" autoHeight />
              </div>
            </div>

            <div class="column">
              <div className="selfCenter" style={{width: 250,height: 375,margin: -30}}>
                <TwitterTimelineEmbed sourceType="profile" screenName="premierleague" autoHeight />
              </div>
            </div>

        </div>

        <footer>Thanks for visiting! Be sure to check out the rest of my pages!<br/></footer>

      </div>
      );
    }
  }
}

export default Sam;
