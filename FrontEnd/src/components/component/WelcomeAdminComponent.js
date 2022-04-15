import React, { Component } from 'react';

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
  
  render() {
    return (
      <>
        Welcome !
        <div className='container'>
          Login Successful , Hello {this.props.match.params.name}
        </div>
      
      </>
    );
  }
}
