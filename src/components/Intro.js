import React from 'react';
import { Container, IntroContainer, Contact } from '../styles';

const Intro = props =>
  <Container>
    <IntroContainer>
      <h1><em>Hi.</em> {props.headline}</h1>
      {/*<p>{props.spiel}</p>*/}
      <Contact>
        <ul>
          <li>
            <a href={props.links.github}>Github</a>
          </li>
          <li>
            <a href={props.links.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={props.links.resume}>Resume</a>
          </li>
          <li>
            <a href={`mailto:` + props.links.email}>Contact</a>
          </li>
        </ul>
      </Contact>

    </IntroContainer>
  </Container>;

export default Intro;
