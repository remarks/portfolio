import React, { Component } from 'react'
import Hero from './Hero'
import Menu from './Menu'
import Projects from './Projects'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className="layout px-8 md:px-16 pt-16 md:py-80">
        <Menu />
        <div className="content w-full max-w-2xl text-grey-darkest">
          <Hero />
          <Projects />
        </div>
      </div>
    )
  }
}

export default App
