import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div className="hero max-w-lg leading-normal">
        <h1 className="font-poppins leading-tight">Hi, I'm Mark Pinero.</h1>
        <p className="mt-8 lg:text-2xl">
          I'm a full-stack developer from Los Angeles, CA and I specialize in front-end development. Working with creative agencies and various startups, I have a keen eye for user experience and design.
        </p>
        <p className="mt-4 lg:text-2xl">
          <a href="mailto:mark@markpinero.com" className="font-bold text-indigo no-underline border-b">
            I'm currently freelancing and seeking new full-time opportunities.
          </a>
        </p>
      </div>
    )
  }
}

export default Hero
