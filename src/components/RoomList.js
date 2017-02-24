import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Create Room: <input type='text' id='newroom' /><button>submit</button><br />
        
      </div>
    );
  }
}

export default RoomList;
