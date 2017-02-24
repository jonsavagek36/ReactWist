import React, { Component } from 'react';

import RoomList from './RoomList';
import Waiting from './Waiting';
import Game from './game/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'roomlist',
      roomlist: ''
    };
  }

  render() {
    let view;
    if (this.state.view == 'roomlist') {
      view = <RoomList />;
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
