import React from 'react';
import { ProjectContainer, Container, Images, Description, Meta, Title, Details, Links } from '../styles.js';

class Project extends React.Component {
  render() {
    let appLink;
    if (this.props.links[0]) {
      appLink = <a href={this.props.links[0].url}>{this.props.title}</a>;
    } else {
      appLink = this.props.title;
    }

    return (
      <ProjectContainer background={this.props.background} color={this.props.color}>
        <Container>
          <Images>
            <img src={this.props.feature} alt={this.props.title} />
          </Images>
          <Description>
            <Meta>{this.props.meta}</Meta>
            <Title>{appLink}</Title>
            <Details>{this.props.details}</Details>
            <Links>
              {this.props.links
                ? this.props.links.map(link =>
                    <a href={link.url} key={link.url}><i className={link.icon} /> {link.title}</a>
                  )
                : null}
            </Links>
          </Description>
        </Container>
      </ProjectContainer>
    );
  }
}

Project.defaultProps = {
  links: []
};

export default Project;
