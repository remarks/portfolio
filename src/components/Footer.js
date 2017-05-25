import React from 'react';
import { FooterContainer, Container } from '../styles';

const Footer = props => (
  <FooterContainer>
    <Container>
      <ul>
        <li><a href={`tel:` + props.links.tel}>818 967 8880</a></li>
        <li><a href={`mailto:` + props.links.email}>hi@markpinero.com</a></li>
      </ul>
      <ul>
        <li><a href={props.links.github}>Github</a></li>
        <li><a href={props.links.linkedin}>LinkedIn</a></li>
      </ul>
      <div>
        © 2017
      </div>
    </Container>
  </FooterContainer>
);

export default Footer;
