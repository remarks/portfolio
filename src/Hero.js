import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div className="hero max-w-lg leading-normal">
        <h1 className="leading-tight font-extrabold">Hi, I'm Mark Pinero.</h1>
        <p className="mt-8 lg:text-2xl">
          I'm a Full-Stack Developer from Los Angeles, CA, currently working as a Front End Developer for <a href="https://humnutrition.com" className="no-underline border-b border-red font-bold text-red" rel="nofollow">HUM Nutrition</a>. Working with creative agencies and various startups, I have a keen eye for user experience and design.
        </p>
        <p className="mt-8 lg:text-2xl">
          <a href="mailto:mark@markpinero.com" className="no-underline font-bold border-b border-red">I'm available for part-time consulting or coffee.</a>
        </p>
      </div>
    )
  }
}

export default Hero
