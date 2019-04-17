import React from 'react';
import Header from './Header';
import TimerBox from './TimerBox';

class App extends React.Component {
  
  state = {
    startFlag: true,
    time: 1200
  }

  longBreak = () => {
    this.setState({time: 1500})
  };

  shortBreak = () => {
    this.setState({time: 5})
  };

  work = () => {
    this.setState({time: 1200})
  };

  start = () => {
    this.setState({startFlag: true})
      const counter = () => {
        if(this.state.startFlag===true && this.state.time > 0) {
          this.setState({time: this.state.time -1})
        }
      }
      if(this.state.startFlag===true && this.state.time > 0) {
        setInterval(counter, 1000);
      }
  }

  stop = () => {
    this.setState({startFlag: false})
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
          start={this.start}
          stop={this.stop}
        />
      </div>
    );
  }
}

export default App;
