/* eslint-disable */
import styled, { injectGlobal, css } from 'styled-components';
import { Link } from 'react-router-dom';

const medium = (...args) => css`
  @media screen and (min-width: 700px) {
    ${css(...args)}
  }
`;

const large = (...args) => css`
  @media screen and (min-width: 1100px) {
    ${css(...args)}
  }
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700');
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', '-apple-system', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.4rem;

    ${large`
      padding-left: 240px;
      `}
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 20px;
    line-height: 3rem;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }
`;

export const BrandHeader = styled.header`
  position: relative;
  padding: 40px 20px;
  background: #111;
  color: #FFF;
  ${large`
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
  text-decoration: none;
`;

export const BrandTag = styled.small`
  display: none;
  margin-bottom: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  ${large`
    display: block;
    `}
`;

export const NavLink = styled(Link)`
  display: inline-block;
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

  ${large`
    display: block;
    margin-bottom: 10px;
    `}
`;

export const Social = styled.ul`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${large`
    display: block;
  `}

  & li {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 20px 20px 0;
  max-width: 1100px;

  > h1 {
    padding-bottom: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  }

  > h2 {
    padding-bottom: 10px;
    font-size: 1.4em;
    border-bottom: 1px rgba(0, 0, 0 , 0.1) solid;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;

  }

  ${large`

    padding: 40px 40px 0;

    `}
`;

export const SpacesBackground = styled.div`
  width: 580px;
  padding: 40px;
  text-align: center;
  margin-bottom: 40px;
  background-color: #443487;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23221538' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

export const KpopBackground = styled.div`
  float: right;
  width: 580px;
  padding-top: 40px;
  text-align: center;
  margin-bottom: 40px;
  background-color: #dbe5db;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2392ac94' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  & img {
    margin: 0 40px 40px;
  }

`;

export const SpacesDescription = styled.div`
  top: 110px;
  left: 550px;
  position: absolute;
  background: #443487;
  width: 450px;
  z-index: 100;
  padding: 40px;
  color: #FFF;

  & h1 {
    font-size: 2.2em;
  }

  & Tag {
    border-color: #FFF
  }
`;

export const KpopDescription = styled.div`
  top: 110px;
  right: 550px;
  position: absolute;
  background: #dbe5db;
  width: 450px;
  z-index: 100;
  padding: 40px;
  color: #000;

  & h1 {
    font-size: 2.2em;
  }

`;

export const Tags = styled.p`
  font-size: 0.8em;
`;

export const Tag = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  margin: 0 5px 0 0;
`;
