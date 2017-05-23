import React from 'react';
import {
  ProjectContainer,
  Container,
  Images,
  Description,
  Meta,
  Title,
  Details,
  Links
} from '../styles.js';

const Project = props => (
  <ProjectContainer background={props.background} color={props.color}>
    <Container>
      <Images>
        <img src={props.feature} alt={props.title} />
      </Images>
      <Description>
        <Meta>{props.meta}</Meta>
        <Title><a href={props.links.url}>{props.title}</a></Title>
        <Details>{props.details}</Details>
        <Links>
          <a href={props.links.url}><i className="fa fa-link" /> Demo</a>
          <a href={props.links.repo}><i className="fa fa-github" /> Repo</a>
        </Links>
      </Description>
    </Container>
  </ProjectContainer>
);

export default Project;
