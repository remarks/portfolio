import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div className="hero max-w-md leading-normal">
        <h1 className="leading-tight font-extrabold">Hi, I'm Mark Pinero.</h1>
        <p className="mt-8 lg:text-2xl">
          I'm a Front End Developer specializing in Vue.js, currently working for <a href="https://humnutrition.com" className="no-underline font-bold text-red" rel="nofollow">HUM Nutrition</a> in Los Angeles, CA.
        </p>
        <p className="mt-4 lg:text-2xl">Working with creative agencies and various startups, I've developed a keen eye for user experience and design.</p>
        <p className="mt-8 lg:text-2xl">
          <a href="mailto:mark@markpinero.com">I'm available for consulting</a>.
        </p>
      </div>
    )
  }
}

export default Hero
