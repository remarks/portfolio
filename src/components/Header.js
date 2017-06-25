import React from 'react';
import styled from 'styled-components';

const Header = () =>
  <HeaderContainer>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Labs</li>
      <li>Now</li>
    </ul>
  </HeaderContainer>;

const HeaderContainer = styled.header`
  font-family: 'Poppins', sans-serif;
  padding: 50px 0 0;
  text-align: center;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 400px;
  }

  & li {
  }
`;

export default Header;
