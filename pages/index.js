import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import Header from '../src/components/header'
import ReactMarkdown from 'react-markdown'
import {Section, Block, Demo, Description, Link} from '../src/components/styled'

const project = `
  ## Workspaces

  Workspaces is a web application which finds local coffee shops around you. I work remotely
  for my day job, so I like looking for new places to work. It uses the **Foursquare API** for
  their venue data in conjunction with **Leaflet.js** for mapping functionality.

  ### Technology Used

  * HTML/CSS
  * jQuery
`

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title="Mark Pinero"
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Header />
        <Section background="blue">
          <Block>
            <Demo>
              <img src="http://i.imgur.com/xLSVf6y.jpg" className="project" />
              <Link href="http://google.com">Demo</Link>
              <Link href="http://google.com">Source Code</Link>
            </Demo>
            <Description>
              <ReactMarkdown source={project} />
            </Description>
          </Block>
        </Section>
      </div>
    )
  }
}
