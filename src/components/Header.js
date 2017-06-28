import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const Header = () =>
  <HeaderContainer>
    <Container>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Labs</li>
        <li>Now</li>
      </ul>
    </Container>
  </HeaderContainer>;

const HeaderContainer = styled.header`
  font-family: 'Poppins', sans-serif;
  text-align: center;

  & ul {
    display: flex;
  }

  & li {
  }
`;

export default Header;
