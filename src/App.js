import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mark Pinero</title>
        </Helmet>
        <div className="w-4/5 mx-4 md:mx-8 md:w-3/4 max-w-lg">
          <h1 className="text-3xl mt-80 lg:text-4xl">Hi, I'm Mark Pinero.</h1>
          <p className="my-8 leading-tight lg:text-2xl lg:w-3/4">I'm a full-stack developer from LA. I'm currently working for a design agency called <a href="https://ettrics.com" rel="nofollow" className="font-bold no-underline border-b pb-x">Ettrics</a>. I specialize in front-end development with a focus on user experience and usability.</p>
          <ul className="list-reset flex items-center text-base md:text-lg">
            <li className="mr-4 md:mr-6">
              <a href="https://linkedin.com/in/markpinero" className="no-underline border-b pb-x">Linkedin</a>
            </li>
            <li className="mr-4 md:mr-6">
              <a href="https://github.com/remarks" className="no-underline border-b pb-x">Github</a>
            </li>
            <li><a href="mailto:mark@markpinero.com" id="email-me" class="button hover:text-white hover:bg-indigo hover:shadow-md md:px-6">E-mail</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
