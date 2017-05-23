import React from "react";
import { Container, IntroContainer, Contact } from "../styles";

const Intro = props => (
  <Container>
    <IntroContainer>
      <h1>{props.headline}</h1>
      <p>{props.spiel}</p>
    </IntroContainer>
    <Contact>
      <ul>
        <li>
          <a href={props.links.github}>
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a href={props.links.linkedin}><i className="fa fa-linkedin" /></a>
        </li>
        <li>
          <a href={`mailto:` + props.links.email}>
            <i className="fa fa-envelope-open-o" />
          </a>
        </li>
      </ul>
    </Contact>
  </Container>
);

export default Intro;
