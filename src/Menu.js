import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="list-reset flex md:block text-base leading-normal md:text-lg md:px-0">
          <li className="pr-2 md:pb-2"><a className="no-underline border-b border-red pb-px" href="https://linkedin.com/in/markpinero">Linkedin</a></li>
          <li className="pr-2 md:pb-2"><a className="no-underline border-b border-red pb-px" href="https://github.com/remarks">Github</a></li>
          <li className="pr-2 md:pb-2"><a className="no-underline border-b border-red pb-px" href="/resume.pdf">Resume</a></li>
        </ul>
      </div>
    )
  }
}

export default Menu