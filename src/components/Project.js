import React from 'react';
import styled from 'styled-components';
import { large } from '../styles';

class Project extends React.Component {
  render() {
    let appLink;
    if (this.props.links[0]) {
      // ...props function for title
      appLink = (
        <a href={this.props.links[0].url}>
          {this.props.title}
        </a>
      );
    } else {
      appLink = this.props.title;
    }

    return (
      <ProjectContainer background={this.props.background} color={this.props.color}>
        <Images>
          <img src={this.props.feature} alt={this.props.title} />
        </Images>
        <Description>
          <Title>
            {appLink}
          </Title>
          <Details>
            {this.props.details}
          </Details>
          <Meta>
            {this.props.meta}
          </Meta>
          <Links>
            {this.props.links
              ? this.props.links.map(link =>
                  <a href={link.url} key={link.url}>
                    <i className={link.icon} /> {link.title}
                  </a>
                )
              : null}
          </Links>
        </Description>
      </ProjectContainer>
    );
  }
}

Project.defaultProps = {
  links: []
};

const ProjectContainer = styled.section`
  background: ${props => (props.background ? props.background : '')};
  color: ${props => (props.color ? props.color : 'inherit')};
  padding: 40px 10%;

  ${large`
    border-radius: 10px;
    padding: 40px;
  `} a:link, a:visited {
    color: ${props => (props.color ? props.color : 'inherit')};
  }
`;

const Images = styled.div`
  margin-bottom: 20px;

  ${large`
    margin-bottom: 10px;
  `} & img {
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }
`;

const Description = styled.div`
  ${large`
    font-size: 16px;
  `};
`;

const Title = styled.h3`
  ${large` flex: 1 1 auto; `} & a:link {
    border-bottom: 5px transparent solid;
    transition: border 0.3s;
  }

  & a:hover {
    border-bottom: 5px #fff solid;
  }
`;

const Details = styled.p`
  margin: 15px 0 10px;
  line-height: 26px;
`;

const Meta = styled.small`
  color: rgba(255, 255, 255, 0.8);
  border-left: 2px rgba(255, 255, 255, 0.8) dashed;
  padding-left: 10px;
`;

const Links = styled.div`
  margin-top: 10px;
  ${large`
    flex: 1 1 20%;
  `} & a {
    margin-right: 25px;
    font-weight: bold;

    ${large`
      padding-bottom: 7px;
      border-bottom: 2px transparent solid;
      transition: all 0.3s ease-in-out;
      
      &:hover {
        border-color: #fff;  
      }
    `};
  }

  & .fa {
    margin-right: 5px;
  }
`;

export default Project;
