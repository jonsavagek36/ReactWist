import React, { Component } from 'react';

import CreateRoom from './CreateRoom';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CreateRoom />
        <div className='roomlist'>
        </div>
        <button>enter room</button>
      </div>
    );
  }
}

export default RoomList;
