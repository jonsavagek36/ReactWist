import React, { Component } from 'react';

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordhide: 'hidden'
    };
    this.togglePrivate = this.togglePrivate.bind(this);
  }

  togglePrivate() {
    if (this.state.passwordhide == 'hidden') {
      this.setState({ passwordhide: 'visible' });
    } else {
      this.setState({ passwordhide: 'hidden' });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Room Name: <input type='text' id='newroomname' /></label>
          <label>Private? <input type='checkbox' id='privatecheck' onClick={this.togglePrivate} /></label>
          <div id='password' style={{visibility:this.state.passwordhide}}>Password: <input type='password' id='roompassword' /></div>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default CreateRoom;
