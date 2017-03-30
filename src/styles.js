import styled, { injectGlobal, css } from 'styled-components';
import { Link } from 'react-router-dom';

const medium = (...args) => css`
  @media screen and (min-width: 700px) {
    ${css(...args)}
  }
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: '-apple-system', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Header = styled.header`
  position: relative;
  margin-bottom: 20px;
  padding: 40px 20px;
  background: #111;
  color: #FFF;
  ${medium`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 240px;
    margin: 0;
    padding: 40px;
    display: flex;
    flex-direction: column;
    `}
`;

export const Brand = styled.a`
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  color: #FFF;
  letter-spacing: 0.5px;
  text-decoration: none;
`;

export const BrandTag = styled.small`
  display: none;
  margin-bottom: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  ${medium`
    display: block;
    `}
`;

export const NavLink = styled(Link)`
  margin-right: 10px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &:hover span {
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  }

  ${medium`
    margin-bottom: 10px;
    `}
`;
