import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div className="hero max-w-lg leading-normal">
        <h1 className="font-poppins leading-tight">Hi, I'm Mark Pinero.</h1>
        <p className="mt-8 lg:text-2xl">
          I'm a Full-Stack Developer from Los Angeles, CA, currently working as a Front End Developer for <a href="https://humnutrition.com" className="no-underline border-b border-pink font-bold text-pink" rel="nofollow">HUM Nutrition</a>. Working with creative agencies and various startups, I have a keen eye for user experience and design.
        </p>
      </div>
    )
  }
}

export default Hero
