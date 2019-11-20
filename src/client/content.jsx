import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  render() {
    return (
      <p>
        {this.props.text}
      </p>
    );
  }
}

export default Content;