import React, { Component } from "react";
import {
  Wrapper,
  Container,
  Contact,
  Intro,
  Divider,
  Headline,
  Project,
  Images,
  Meta,
  Title,
  Description,
  Details,
  Links,
  Footer
} from "../styles.js";

import spaces from "../images/spaces@2x.jpg";
import recap from "../images/recap-1@2x.jpg";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Intro>
            <h1>
              Hi. I'm Mark Pinero. I'm a full-stack developer from Los Angeles, CA.
            </h1>
            <Details>
              I've been a part of the web from the blinkies of Geocities to PHP vulnerabilities to JavaScript fatigue. I studied business and marketing in school while keeping web development as a part-time hobby but want to finally turn it into a full-time career.
            </Details>
          </Intro>
          <Contact>
            <ul>
              <li>
                <a href="https://github.com/remarks">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li><a href="/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="/"><i className="fa fa-envelope-open-o" /></a></li>
            </ul>
          </Contact>
        </Container>
        {/*<Divider />
        <Headline>Previous Projects</Headline>*/}
        <Project
          background="linear-gradient(135deg, #2D2771 0%, #CF6FAC 100%)"
          color="#FFF"
        >
          <Container>
            <Images>
              <img src={recap} style={{ height: "550px", width: "100%" }} />
            </Images>
            <Description>
              <Meta>Node, MongoDB, Redis</Meta>
              <Title>K-Pop Recap</Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id egestas nulla, laoreet sodales eros. Vestibulum placerat ornare sagittis. Morbi posuere magna in nulla faucibus, sed molestie felis blandit. Integer porttitor luctus pellentesque. Pellentesque nec lacinia velit, sit amet pretium tellus. Vivamus eget sodales enim. Vestibulum lectus est, efficitur vitae ullamcorper ut, eleifend aliquam arcu. Aenean pretium tortor nisl, ac vulputate nisi sollicitudin quis.
              <Links>
                <a href="http://www.kpoprecap.com">
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
        </Project>
        <Project
          background="linear-gradient(135deg, #2825A7 0%, #8481FF 100%)"
          color="#fff"
        >
          <Container>
            <Images>
              <img src={spaces} style={{ height: "550px", width: "100%" }} />
            </Images>
            <Description>
              <Meta>HTML, CSS, jQuery</Meta>
              <Title>Spaces</Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id egestas nulla, laoreet sodales eros. Vestibulum placerat ornare sagittis. Morbi posuere magna in nulla faucibus, sed molestie felis blandit. Integer porttitor luctus pellentesque. Pellentesque nec lacinia velit, sit amet pretium tellus. Vivamus eget sodales enim. Vestibulum lectus est, efficitur vitae ullamcorper ut, eleifend aliquam arcu. Aenean pretium tortor nisl, ac vulputate nisi sollicitudin quis.
              <Links>
                <a href="https://remarks.github.io/spaces">
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
        </Project>
      </Wrapper>
    );
  }
}

export default App;
