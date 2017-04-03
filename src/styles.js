/* eslint-disable */
import styled, { injectGlobal, css } from 'styled-components';
import { Link } from 'react-router-dom';

const medium = (...args) => css`
  @media screen and (min-width: 700px) {
    ${css(...args)}
  }
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: '-apple-system', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5rem;

    ${medium`
      padding-left: 240px;
      `}
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5em;
    line-height: 3rem;
  }
`;

export const BrandHeader = styled.header`
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
    justify-content: space-between;
    `}

  & a {
    color: #FFF;
  }
`;

export const Brand = styled.a`
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
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
  display: block;
  margin-right: 15px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  & span {
    padding-bottom: 5px;
  }

  &:hover span {
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  }

  ${medium`
    margin-bottom: 10px;
    `}
`;

export const Social = styled.ul`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${medium`
    display: block;
  `}

  & li {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 40px 0;
  max-width: 900px;

  & h1 {
    padding-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  }

  & p {
    max-width: 600px;
  }
`;
