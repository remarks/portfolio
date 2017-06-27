import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const Footer = () =>
  <Container>
    <FooterContainer>
      <h2>I'm available for new projects. <a href="mailto:mark@markpinero.com">Contact me.</a></h2>
    </FooterContainer>
  </Container>;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 50px 0 70px;
  text-align: center;

  & a:link, a:visited {
    color: blue;
    transition: all 0.3s ease-in-out;
    border-bottom: 5px transparent solid;

    &:hover {
      border-color: blue;
    }
  }
`;

export default Footer;
