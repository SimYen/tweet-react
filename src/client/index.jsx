import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from 'tweets';
import User from 'user';
import Content from 'content';

class App extends React.Component {
  render() {
    let allTweets = Tweets.map(tweet => {
      return (
        <div>
          <User name={tweet.user}/>
          <Content text={tweet.text}/>
        </div>
      );
    })
    return (
      <div>
        {allTweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
console.log(Tweets);