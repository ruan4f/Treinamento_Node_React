import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {

  state = {
    count: 1,
    name: "Click to count"
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Child name={this.state.name} />
          <div>{this.state.count}</div>
          <button className="button" onClick={this.handleClick}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
