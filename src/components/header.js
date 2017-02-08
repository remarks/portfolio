import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Section, Block, Headline, Link, Avatar} from './styled'

const headline = `
  # Hello, I'm Mark Pinero. I'm a full-stack developer based in Los Angeles, CA.

  I work with React in the front-end and NodeJS in the back-end.
`

const Header = () => {
  return (
    <Section>
      <Block header>
        <Headline>
          <ReactMarkdown source={headline} />
          <Link href="#contact">Contact Me</Link>
          <Link href="https://github.com/remarks" git>Github</Link>
          <Link href="https://github.com/remarks">LinkedIn</Link>
        </Headline>
        <Avatar src="https://placeimg.com/100/100/people" />
      </Block>
    </Section>
  )
}

export default Header;