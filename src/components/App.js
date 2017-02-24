import React, { Component } from 'react';

import io from 'socket.io-client';

import RoomList from './RoomList';
import Waiting from './Waiting';
import Game from './game/Game';

let socket = io.connect(`http://localhost:5000`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'roomlist',
      roomlist: ''
    };
  }

  createRoom() {
    let private_game = false;
    let nameNode = document.getElementById('newroomname');
    let pwdNode = document.getElementById('roompassword');
    if (pwdNode.value != '' || pwdNode.value != null) {
      private_game = true;
    }

  }

  render() {
    let view;
    if (this.state.view == 'roomlist') {
      view = <RoomList createRoom={this.createRoom} />;
    } else if (this.state.view == 'waiting') {
      view = <Waiting />;
    } else if (this.state.view == 'game') {
      view = <Game />;
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
