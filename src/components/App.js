import React, { Component } from 'react';
import Header from './Header';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
