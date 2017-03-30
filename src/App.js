import React, { Component } from 'react';
import { Header, Brand, BrandTag, NavLink, S } from './styles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Brand href="/">
            Mark Pinero
            <BrandTag>Web Developer</BrandTag>
          </Brand>
          <NavLink to="/projects"><span>Projects</span></NavLink>
          <NavLink to="/resume"><span>Resume</span></NavLink>
          <NavLink to="/about"><span>About</span></NavLink>
        </Header>

      </div>
    );
  }
}

export default App;
