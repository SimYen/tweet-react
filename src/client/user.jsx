import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.name.profile_image_url} alt=""/>
        <span>{this.props.name.name}</span>
        <span>  @{this.props.name.screen_name}</span>
        <span>  . {this.props.name.created_at}</span>
      </div>
    );
  }
}

export default User;