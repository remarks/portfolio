import React from 'react';
import {
  Section,
  SpacesBackground,
  KpopBackground,
  SpacesDescription,
  KpopDescription,
  Tag,
  Tags
} from '../styles';
import ReactMarkdown from 'react-markdown';
import RetinaImage from 'react-retina-image';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <SpacesBackground>
            <RetinaImage
              src={[
                require('../images/spaces.jpg'),
                require('../images/spaces@2x.jpg')
              ]}
            />
          </SpacesBackground>
          <SpacesDescription>
            <h1>Spaces</h1>
            <Tags>
              Tech Used:<br />
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>jQuery</Tag>
            </Tags>
            <p>
              At my day job, I work remotely so I go to coffee shops frequently. I made this app so I could look for local places for me to work easily.
            </p>
          </SpacesDescription>
        </Section>
        <Section>
          <KpopBackground>
            <RetinaImage
              src={[
                require('../images/recap-1.jpg'),
                require('../images/recap-1@2x.jpg')
              ]}
            />
            <RetinaImage
              src={[
                require('../images/recap-2.jpg'),
                require('../images/recap-2@2x.jpg')
              ]}
            />
          </KpopBackground>
          <KpopDescription>
            <h1>Kpop Recap</h1>
            <Tags>
              Tech Used:<br />
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>Node.js</Tag>
              <Tag>MongoDB</Tag>
            </Tags>
            <p>
              I'm a
              {' '}
              <strong>huge</strong>
              {' '}
              K-pop fan and have been a prominent member in the scene for years. However, keeping up with the news is hard. The estabilished news sources created a firehose of news without any filtering capabilities.
            </p>
            <p>
              I made this app to scrape the frontpage of the top news sources and created my own tag filtering techniques.
            </p>
          </KpopDescription>
        </Section>
      </div>
    );
  }
}

export default Projects;
