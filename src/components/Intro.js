import React from 'react';
import styled from 'styled-components';
import { Container, large } from '../styles';

const Intro = props =>
  <Container>
    <IntroContainer>
      <h1><em>Hi.</em> {props.headline}</h1>
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

const IntroContainer = styled.section`
  padding: 20px 0 0;

  & h1 {
    font-size: 1.4em;
    line-height: 1.5;

    ${large`
      font-size: 1.9em;
    `}
  }

  & em {
    color: blue
  }

  ${large`
    flex: 1 1 500px;
    padding: 50px 0 0;
  `}
`;

const Contact = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  font-family: Poppins, Helvetica Neue, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0 0;

  ${large`
    padding: 20px 0 30px;
  `}

  & a:link, a:visited {
    border-bottom: 5px transparent solid;
    transition: all 0.3s ease-in-out;
    color: blue;

    &:hover {
      color: blue;
      border-color: blue
    }
  }

  & li {
    display: inline-block;
    width: 50%;

    &:not(:last-of-type) {
      margin: 0 0 20px 0;
    }

    ${large`
      width: auto !important;
      &:not(:first-of-type) {
        margin: 0 0 0 20px !important;
      }
      &:not(:last-of-type) {
        margin-bottom: 0 !important;
      }
    `}
  }
`;

export default Intro;
