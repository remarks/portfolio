import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div className="hero max-w-md leading-normal">
        <h1 className="leading-tight font-extrabold">Hi, I'm Mark Pinero.</h1>
        <p className="mt-8 lg:text-2xl">
          I'm a Front End Developer from Los Angeles, CA, currently working for <a href="https://humnutrition.com" className="no-underline font-bold text-red" rel="nofollow">HUM Nutrition</a>. Working with creative agencies and various startups, I've developed a keen eye for user experience and design.
        </p>
      </div>
    )
  }
}

export default Hero
