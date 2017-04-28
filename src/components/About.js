import React from 'react';
import { Section } from '../styles';
import ReactMarkdown from 'react-markdown';

const avatar = require('../images/avatar.JPG');

const about = `
Ever since I was a kid, I wanted to get into programming. I remember tweaking the source code to this Pokemon website on Geocities. I bought books on HTML and CSS in the 6th grade. Bought my first domain the next year.  I *physically* wrote code on sheets of paper (what a nerd right?). Made **truly** custom Myspace layouts. I've always been a part of the web.

After high school, I was lured towards fame and fortune in business and marketing. Then graphic design. Typical college student, not knowing what to do. Even though it wasn't my focus anymore, I kept working on the web. I've spent on end coding, even with my mediocre skills.

When I finally realized working in web development was my passion, I came back to my first love. I was scheduled to transfer to university as a computer science major in 2016.

I'm not your run-of-the-mill bootcamp graduate. No bullshit. I am sincerely passionate about the web and it's future.
`;

// Ever since I was a kid, I wanted to get into computer programming. I bought books
// about learning how to code in HTML and CSS. I would write code on pieces of paper.
// I made websites about gaming and anime all throughout middle and high school.
// Needless to say, I was primed for a future in technology.
//
// When I got out of high school, I was lead astray into business and marketing to
// make a lot of money, because why not? I still had the urge to code though. I would
// use my ingrained web development skills to complement my endeavors.

class About extends React.Component {
  render() {
    return (
      <Section>
        <h1>
          Hi, my name is Mark Pinero. I'm a full-stack developer from Los Angeles, CA and this is my spiel.
        </h1>
        <img
          src={avatar}
          style={{
            borderRadius: '50%',
            float: 'right',
            width: '20%',
            marginLeft: '5%'
          }}
        />
        <ReactMarkdown source={about} />
      </Section>
    );
  }
}

export default About;
