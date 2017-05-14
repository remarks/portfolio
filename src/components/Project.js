import React from "react";
import {
  ProjectContainer,
  Images,
  Meta,
  Title,
  Description,
  Details,
  Links,
  Footer
} from "../styles.js";

const Project = ({ images, title, meta, description, links }) => (
  <ProjectContainer>
    <Container>
      <Images>
        <img src={recap} style={{ height: "550px", width: "750px" }} />
      </Images>
      <Description>
        <Meta>Node, MongoDB, Redis</Meta>
        <Title>K-Pop Recap</Title>
        I've been a part of the web from the blinkies of Geocities to PHP vulnerabilities to JavaScript fatigue. I studied business and marketing in school while keeping web development as a part-time hobby but want to finally turn it into a full-time career.
        <Links>
          <a href="/spaces">
            <i className="fa fa-link" /> Demo
          </a>
          <a href="https://github.com/remarks/spaces">
            <i className="fa fa-file-text" /> Case Study
          </a>
          <a href="https://github.com/remarks/spaces">
            <i className="fa fa-github" /> Repo
          </a>
        </Links>
      </Description>
    </Container>
  </ProjectContainer>
);

export default Project;
