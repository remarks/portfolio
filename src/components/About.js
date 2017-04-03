import React from 'react';
import { Section } from '../styles';
import ReactMarkdown from 'react-markdown';

const about = `
# Hello, my name is Mark Pinero. I'm a full-stack developer from Los Angeles, CA.

Ever since I was a kid, I wanted to get into computer programming. I bought books
about learning how to code in HTML and CSS. I would write code on pieces of paper.
I made websites about gaming and anime all throughout middle and high school.
Needless to say, I was primed for a future in technology.

When I got out of high school, I was lead astray into business and marketing as a ways
and means of making a lot of money. However, I still had the urge to code. I would
use my ingrained web development skills to complement my endeavors.
`;

class About extends React.Component {
  render() {
    return (
      <Section>
        <ReactMarkdown source={about} />
      </Section>
    );
  }
}

export default About;
