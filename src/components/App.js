import React from 'react';
import Header from './Header';
import TimerBox from './TimerBox';

class App extends React.Component {
  
  render() {
    return (
      <div className="App ui container">
        <Header />
        <TimerBox />
      </div>
    );
  }
}

export default App;
