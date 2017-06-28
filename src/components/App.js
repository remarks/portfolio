import React, { Component } from 'react';
import Intro from './Intro';
import Project from './Project';
import data from '../data.json';
import styled from 'styled-components';
import { large } from '../styles';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Intro {...data.intro} />
        <ProjectGrid>
          {data.projects.map((project, index) => <Project key={`project-` + index} {...project} />)}
        </ProjectGrid>
        <Footer />
      </div>
    );
  }
}

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 1200px;

  ${large`
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 auto 50px;
  `};
`;

export default App;
