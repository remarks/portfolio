import styled, { injectGlobal, css } from 'styled-components';

export const large = (...args) => css`
  @media screen and (min-width: 990px) {
    ${css(...args)}
  }
`;

// eslint-disable-next-line
injectGlobal`
body {
  margin: 0;
  color: rgba(0,0,0,0.7);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  line-height: 26px;

  ${large`
    line-height: 32px;
  `}
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 0.75rem;
  font-family: Poppins, Helvetica Neue, Arial, sans-serif;
  line-height: 1.3em;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.8em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 0.8em;
  font-weight: normal;
}

a:link, a:visited {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}

a:hover {
  color: blue;
  border-color: blue;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.outline {
  background: rgba(255,0,0,0.1)
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  ${large`
    flex-direction: row;
    flex-wrap: nowrap;
  `}
`;

export const Headline = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;
