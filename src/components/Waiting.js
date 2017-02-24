import React, { Component } from 'react';

class Waiting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='playersinroom'>
        </div>
        <button>Start Game</button>
      </div>
    );
  }
}

export default Waiting;
