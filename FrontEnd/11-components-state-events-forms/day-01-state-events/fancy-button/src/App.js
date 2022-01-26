import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Clicks: 0,
    }
    this.handleClick =this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((previousState, _props) => ({Clicks: previousState.Clicks + 1}))
    console.log('button click')
    console.log(this.state.Clicks)
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.Clicks}</button>
      </div>
    );
  }
}

export default App;
