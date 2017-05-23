import React, { Component } from "react";
import { Wrapper } from "../styles.js";
import Intro from "./Intro";
import Project from "./Project";
import Footer from './Footer';
import data from "../data.json";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Intro {...data.intro} />
        {data.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        <Footer {...data.footer} />
      </Wrapper>
    );
  }
}

export default App;
