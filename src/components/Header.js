import React from 'react';
import { BrandHeader, Brand, BrandTag, NavLink, Social } from '../styles';

// @TODO: Implement routing

class Header extends React.Component {
  render() {
    return (
      <BrandHeader>
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
          <li>
            <a href="http://github.com/remarks">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mark-pinero-7430a5129/">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
        </Social>
      </BrandHeader>
    );
  }
}

export default Header;
