import React from 'react';
import { Heading, Brand, BrandTag, NavLink, Social } from '../styles';

// @TODO: Implement routing

class Header extends React.Component {
  render() {
    return (
      <Heading>
        <Brand href="/">
          Mark Pinero
          <BrandTag>Web Developer</BrandTag>
        </Brand>
        <nav>
          <NavLink to="/about"><span>About</span></NavLink>
          <NavLink to="/projects"><span>Projects</span></NavLink>
          <NavLink to="/resume"><span>Resume</span></NavLink>
        </nav>
        <Social>
          <li>
            <a href="https://twitter.com/markpinero">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li><i className="fa fa-github" aria-hidden="true" /></li>
          <li><i className="fa fa-linkedin" aria-hidden="true" /></li>
        </Social>
      </Heading>
    );
  }
}

export default Header;
