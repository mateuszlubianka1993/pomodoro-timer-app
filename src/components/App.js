import React from 'react';
import Header from './Header';
import TimerBox from './TimerBox';

class App extends React.Component {
  
  state = {
    start: false,
    time: 20
  }

  longBreak = () => {
    this.setState({time: 25})
  };

  shortBreak = () => {
    this.setState({time: 5})
  };

  work = () => {
    this.setState({time: 20})
  };

  render() {
    return (
      <div className="App ui container">
        <Header />
        <TimerBox 
          time={this.state.time}
          longBreak={this.longBreak}
          shortBreak={this.shortBreak}
          work={this.work}
        />
      </div>
    );
  }
}

export default App;
