import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };
  // methods for dashboard component

  // strike - reset to 0 when a player reaches 3 strikes
  strike = () => {
    if (this.state.strikes === 3) {
      this.setState({ strikes: 0 });
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  }

  // ball - reset to 0 when a player reaches 4 balls
  ball = () => {
    if (this.state.balls === 4) {
      this.setState({ balls: 0 });
    } else {
      this.setState({ balls: this.state.balls + 1 });
    }
  }

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  }

  // hit - balls and strikes reset to 0 when a `hit` is recorded
  hit = () => {
    this.setState({ strikes: 0 });
  }

  render () {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit} />
      </div>
    );
  }
}

export default App;