import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Projects from './Projects'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Helmet>
          <title>Mark Pinero</title>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:700" rel="stylesheet" />
        </Helmet>
        <div className="hero">
          <h1>Hi, I'm Mark Pinero.</h1>
          <p>I'm a full-stack developer from LA, currently working for  <a href="https://ettrics.com" rel="nofollow">Ettrics</a>. I specialize in front-end development with a keen eye for user experience and usability.</p>
          <ul>
            <li><a href="https://linkedin.com/in/markpinero">Linkedin</a></li>
            <li><a href="https://github.com/remarks">Github</a></li>
            <li><a href="mailto:mark@markpinero.com">E-mail</a></li>
          </ul>
        </div>
        <Projects />
      </div>
    )
  }
}

export default App
